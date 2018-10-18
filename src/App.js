import React, { Component } from 'react';
import DtmRcfr from './Module';
import SearchInput from "./searchInput";
import ActRajax from './act_rajx/components/Module';
import IcRcln from "./ic_rcln/components/Module";
import ClickOutSide from "./utils/click_outside";
import './css.scss';
import './core/core.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedData: [],
      showSearchResult: false,
      inputValue: '',
      innerValue: '',
      actData: [],
      selectedVal: null, //it's finall value
      fetchFinish: null,
      clientW: window.innerWidth,
      width: null,
      height: null
    };
    this.AbortController = null;
    this.textInput = React.createRef();
    // eval('window.getInputValue'+this.props.number+' = this.getInputValue');
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    // eval('window._onFocusHandle' + this.props.number + '= this._onFocusHandle');
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  _onClickItem = (data) => {
    this.setState({ selectedData: [data], inputValue: data.text, showSearchResult: (this.state.width < 980) ? true : false, selectedVal: data });
    // this.textInput.current.blurTextInput();
  }
  _onFocusHandle = (e) => {
    console.log('isFocus');
    this.setState({ showSearchResult: true });
  }
  _onBlurHandle = (e) => {
    // this.setState({ showSearchResult: false })
    // this.textInput.current.focusTextInput();
  }
  _onClickOutSide = () => {
    const {
      selectedData,
      innerValue,
      fetchFinish,
      actData,
      selectedVal,
    } = this.state;
    selectedData.length <= 0 && innerValue.length >= 2 && fetchFinish && actData.length >= 0 && !selectedVal && this.selectActFirstItem() || this.setState({ showSearchResult: (this.state.width < 980) ? true : false });
  }
  _onClickListItem = (v, e) => {
    // const thisItem = this.state.actData.sort((a, b) => a.txt.length - b.txt.length)[v.dataIndex];
    this.setState({ inputValue: v.txt, showSearchResult: (this.state.width < 980) ? true : (e || false), selectedVal: v });
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  selectActFirstItem = () => {
    const firstItemName = this.state.actData.sort((a, b) => a.txt.length - b.txt.length)[0].txt;
    const firstItem = this.state.actData.sort((a, b) => a.txt.length - b.txt.length)[0];
    firstItem.dataIndex = 0;
    this.setState({ showSearchResult: (this.state.width < 980) ? true :false, inputValue: firstItemName, selectedVal: firstItem });
                      //關閉選單                  把文字塞回input
  }
  getDataFromServer = (value) => {
    this.AbortController && this.AbortController.abort();
    this.AbortController = new AbortController();
    const signal = this.AbortController.signal;
    this.setState({ fetchFinish: false });
    console.log('fetching...', value);
    this.setState({
      showText: (
        <div className="">
          <span>載入中...</span>
        </div>
      ),
      actData: []
    });

    let url = 'https://tun-hsiang.000webhostapp.com/ajax.php?keyWord=' + value;
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      signal,
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(d => this.processData(d, value))
      .catch(res => console.error('Request失敗 原因是 :', res));
  }
  getInputValue = () => {
    return this.state.selectedVal;
  }
  processData(data, searchKeyWord) {
    // Destinations 是 fetch的第一個key name
    let p = new Promise(function (resolve, reject) {
      data.Destinations.map((item) => {
        item.level1 = item.Kind;
        item.level2 = item.KindName;
        item.level3 = item.Code;
        item.txt = item.Name;
        delete item.Kind;
        delete item.KindName;
        delete item.Code;
        delete item.Name;
      });
      resolve(data);
    });
    this.setState({ actData: data.Destinations, searchKeyWord: searchKeyWord, showText: '', fetchFinish: true });
    return p;
  }
  onTypingFinish = (value) => {
    let self = this;
    this.setState({ innerValue: value, inputValue: value, selectedData: [], selectedVal: null });
    // if (this.timer) {
    //   clearTimeout(this.timer);
    // }
    // this.timer = setTimeout(() => {
    //   self.getDataFromServer(value);
    // }, 500);
    this.getDataFromServer(value);
  }
  render() {
    const selectedData = this.state.selectedData;
    const selected = selectedData.map(v => v.value);
    return (
      <ClickOutSide
        className="searchContainer"
        onClickOutside={() => this._onClickOutSide()}
      >
        <SearchInput
          ref={this.textInput}
          className="col-xs-24"
          inputValue={this.state.inputValue}
          innerValue={this.state.innerValue}
          onTypingFinish={this.onTypingFinish} //中文輸入完成
          onTyping={(inputValue)=>this.setState({inputValue})} //正在輸入
          onFocus={this._onFocusHandle}
          onBlur={this._onBlurHandle}
        />
        <ActRajax
          containerClass={(this.state.innerValue.length < 2 || !this.state.showSearchResult) && 'd-no'}
          sectionClass={''}
          itemClass={''}
          titleClass={''}
          data={this.state.actData}
          matchWord={this.state.innerValue}
          closeBtnOnClick={() => this.setState({ showSearchResult: false })}
          getItemClickValue={(v, e) => this._onClickListItem(v, e) }
          selectedVal={this.state.selectedVal}
          isFocus={this.state.showSearchResult}
          showText={this.state.showText}
          noMatchText="很抱歉，找不到符合的項目"
          minimumStringQuery={'請至少輸入兩個字'}
          minimumStringQueryLength={2}
          footer={false}
          rules={
            [
              {
                title: '城市',
                icon: <IcRcln name="toolmapf" key={1} />
              },
              {
                title: '區域',
                icon: <IcRcln name="traffictrafficcruiseshipf" key={2} />
              },
              {
                title: '行政區',
                icon: <IcRcln name="hotelbusinesscen" key={3} />
              },
              {
                title: '商圈',
                icon: <IcRcln name="productpricef" key={4} />
              },
              {
                title: '地標',
                icon: <IcRcln name="hotelwify" key={5} />
              },
              {
                title: '飯店',
                icon: <IcRcln name="hotelforeignBookingf" key={6} />
              }
            ]
          }
        ></ActRajax>
          {           
            <div className={this.state.innerValue.length < 2 && this.state.showSearchResult ? "DtmRcfrContainer" : "DtmRcfrContainer d-no"}>
              <span className="DtmRcfrNotice">找不到選項？請輸入關鍵字查詢</span>
              <DtmRcfr
                levelKey={['vLine', 'vCountry', 'vCity']}
                dataResouce={"./abroad.json"}
                replaceRegular={/[a-zA-Z\(\)\s]/g}
                onClickItem={this._onClickItem}
                selectedData={selected}
              />
            </div>
          }
       {/* <p>App.state.innerValue: {this.state.innerValue}</p> */}
      </ClickOutSide>
    );
  }
}

export default App;
