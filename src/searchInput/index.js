import React, { Component } from 'react';
// innerValue 運算用
// inputValue 顯示用
class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      innerValue: ''
    };
    this.textInput = React.createRef();
  }
  focusTextInput() {
    this.textInput.current.focus();
  }
  blurTextInput() {
    this.textInput.current.blur();
  }
  render() {
    let isOnComposition = false;
    const isChrome = !!window.chrome && !!window.chrome.webstore;
    const handleComposition = (e) => {
      if (!(e.target instanceof HTMLInputElement)) return

      if (e.type === 'compositionend') {
        if (isChrome) {
          // 中文輸入完成
          this.setState({ innerValue: e.target.value });
          this.props.onTypingFinish(e.target.value);
        }
        isOnComposition = false
      } else {
        isOnComposition = true
      }
    }

    const handleChange = (e) => {
      if (!isOnComposition) {
        this.setState({
          inputValue: e.target.value,
          innerValue: e.target.value,
        });
        this.props.onTypingFinish(e.target.value);
      } else {
        this.setState({ inputValue: e.target.value });
        this.props.onTyping(e.target.value);
      }
    }
    return (
      <div>
        <input type="text"
          value={this.props.inputValue}
          ref={this.textInput}
          placeholder="輸入城市、景點、體驗行程或活動名稱"
          onCompositionStart={handleComposition}
          onCompositionUpdate={handleComposition}
          onCompositionEnd={handleComposition}
          onChange={handleChange}
          onFocus={(e)=>{
            this.props.onFocus(e);
          }}
          onBlur={(e) => {
            this.props.onBlur(e);
          }}
        />
        {/*<p>inputValue: {this.state.inputValue}</p>
          <p>innerValue: {this.state.innerValue}</p>*/}
      </div>
    );
  }
}

export default SearchInput;
