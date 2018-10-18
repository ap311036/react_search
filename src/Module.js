import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import cx from 'classnames';
import NtbRcln, { Tab } from './ntb_rcln';
import CrRcln from './cr_rcln/';
import IcRcln from './ic_rcln';
import './css.scss';

const dataMap = {};

const SecAll = (props) => {
    const {
        onClick,
        isSelected = false,
        text,
    } = props;

    return (
        <span
            className={cx('sec_all', {
                active: isSelected,
            })}
            onClick={onClick}
        >
            {text}
            {
                isSelected ? <IcRcln name="toolchoose" /> : null
            }
        </span>
    );
};

const Item = (props) => {
    const {
        onClick,
        isSelected = false,
        text,
    } = props;
    return (
        <span
            className={cx('item', {
                active: isSelected,
            })}
            onClick={onClick}
        >
            {text}
            {
                isSelected ? <IcRcln name="toolchoose" /> : null
            }
        </span>
    );
};

const SecContent = (props) => {
    const {
        title,
        data,
        parents,
        replaceRegular,
        onClickItem,
        levelKey,
        selectedData,
    } = props;

    const keys = Object.keys(data);
    // 此層的全選是否可以點選
    const titleIsClickable = keys.indexOf('_') !== -1;
    const parentValue = parents.join('-');
    const dataObj = {};
    const lastKey = levelKey[levelKey.length - 1];
    // 此層全選的value
    const allValue = `${parentValue}-_`;

    // 把parentKey跟levelKey轉換成Object送出
    for (let i = 0, _length = parents.length; i < _length; i++) {
        const key = levelKey[i];
        dataObj[key] = parents[i];
    }

    return (
        <div className="sec">
            <div className="sec_title">
                <SecAll
                    isSelected={selectedData.indexOf(allValue) !== -1}
                    onClick={() => {
                        if (!titleIsClickable) return;
                        const sendData = {
                            ...dataObj,
                            text: `${title}全部`,
                            value: allValue,
                            [lastKey]: '_',
                        };
                        onClickItem(sendData);
                    }}
                    text={title}
                />
            </div>
            <div className="sec_content">
                {
                    keys.map(v => {
                        if (v === '_') return null;
                        const showText = data[v];
                        const value = `${parentValue}-${v}`;
                        const sendData = {
                            ...dataObj,
                            text: showText,
                            value,
                            [lastKey]: v,
                        };
                        const isSelected = selectedData.indexOf(value) !== -1;
                        return (
                            <Item
                                key={v}
                                onClick={() => { onClickItem(sendData) }}
                                isSelected={isSelected}
                                text={showText.replace(replaceRegular, '')}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

class Module extends Component {
    static defaultProps = {
        // max: 1,
        selectedData: [],
    };
    static propTypes = {
        levelKey: PropTypes.array.isRequired,
        // max: PropTypes.number, // 最多選幾筆
        onClickItem: PropTypes.func,
        replaceRegular: PropTypes.instanceOf(RegExp), // 傳正規表達式規則過濾不要的字串
        selectedData: PropTypes.array, // 傳選取的item的value, 若為多筆則陣列長度大於1
    };

    constructor (props) {
        super(props);
        this.dataSource = null;
    }

    componentDidMount () {
        const {
            dataResouce,
        } = this.props;

        const data = dataMap[dataResouce];
        // 如果沒有data就發fetch
        if (typeof data === 'undefined') {
            fetch(dataResouce)
                .then(r => {return r.json() })
                .then(d => {
                    console.log(d)
                    dataMap[dataResouce] = d;
                    this.dataSource = d;
                    this.forceUpdate();
                });
        } else {
            this.dataSource = data;
            this.forceUpdate();
        }
    }

    _render (parentArray) {
        const {
            dataSource,
        } = this;
        const {
            levelKey,
            selectedData,
        } = this.props;

        const levelKeyLength = levelKey.length;
        // 若keyNum為0 表示是最頂層的物件
        const keyNum = parentArray.length;
        // 取上一層parent的值
        const parentKey = parentArray[parentArray.length - 1];
        const key = levelKey[keyNum];
        // 不是頂層物件,就要再傳parentKey查找
        const dataObj = keyNum === 0 ? dataSource[key] : dataSource[key][parentKey];
        const keys = Object.keys(dataObj);
        // 是否要render最後一層選單了, 如果不是就遞迴render
        const isLast = (levelKeyLength - keyNum <= 3);
        // 如果已經最後一層className為'one_floor'
        const classList = isLast ? 'one_floor' : 'search_panel_two';

        return (
            <NtbRcln customClass={classList}>
                {
                    keys.map(v => {
                        const parents = [...parentArray, v];
                        // 是否有children被選取
                        const isChildrenSelected = selectedData.filter(selectedItem => {
                            const arr = selectedItem.split('-');
                            return arr.indexOf(v) !== -1;
                        }).length > 0;
                        return (
                            <Tab
                                key={v}
                                label={dataObj[v]}
                                dot={isChildrenSelected}
                            >
                                {
                                    isLast ?
                                        this._renderLast(parents) :
                                        this._render(parents)
                                }
                            </Tab>
                        );
                    })
                }
            </NtbRcln>
        );
    }

    // 剩最後兩層的levelKey的render方法
    _renderLast (parentArray) {
        const {
            dataSource,
        } = this;
        const {
            levelKey,
            replaceRegular,
            onClickItem,
            selectedData,
        } = this.props;
        const levelKeyLength = levelKey.length;
        const parentKey = parentArray[parentArray.length - 1];
        // 取出倒數第二層的key
        const key = levelKey[levelKeyLength - 2];
        // 取出最後一層key
        const lastKey = levelKey[levelKeyLength - 1];
        const dataObj = dataSource[key][parentKey];
        const keys = Object.keys(dataObj);

        return keys.map(v => {
            const parents = [...parentArray, v];
            if (v === '_') {
                const sendData = {};

                // 把parentKey跟levelKey轉換成Object送出
                for (let i = 0, _length = levelKey.length; i < _length; i++) {
                    const key = levelKey[i];
                    sendData[key] = parentArray[i] ? parentArray[i] : '_';
                }

                const k = levelKey[levelKeyLength - 3];
                const value = `${parents.join('-')}-${v}`;
                // 是否selectedAll
                const isSelected = selectedData.indexOf(value) !== -1;
                // 全區字串
                const allTxt = dataSource[k][parentKey] + '全區';
                sendData.value = value;
                sendData.text = allTxt;


                return (
                    <div className="all_wrap" key={v}>
                        <CrRcln
                            type="checkbox"
                            textContent={allTxt}
                            whenChange={() => {
                                onClickItem(sendData);
                            }}
                            checked={isSelected}
                        />
                    </div>
                );
            }
            return (
                <SecContent
                    key={v}
                    title={dataObj[v]}
                    data={dataSource[lastKey][v]}
                    parents={parents}
                    replaceRegular={replaceRegular}
                    onClickItem={onClickItem}
                    levelKey={levelKey}
                    selectedData={selectedData}
                />
            );
        });
    }

    render () {
        const {
            dataSource,
        } = this;

        if (dataSource === null) return <div>載入資料中...</div>;

        return (
            <div className="dtm_rcfr">
                {
                    this._render([])
                }
            </div>
        );
    }
}

export default Module;
