(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(34)},,,,,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),r=n.n(o),s=(n(20),n(3)),c=n(4),l=n(7),u=n(5),h=n(6),p=n(2),d=n(9),m=n(10),f=n(11),v=(n(22),n(1)),k=n.n(v),g=(n(23),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=k()("panel",{active:this.props.active});return i.a.createElement("div",{className:e},this.props.children)}}]),t}(a.Component));g.defaultProps={label:"\u6211\u662f\u9801\u7c64"};var b=g,C=function(e){var t=k()({active:e.active,dot:e.dot});return i.a.createElement("li",{onClick:function(){e.onClick(e.index)},className:t},i.a.createElement("span",null,e.text))},w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={activeTabIndex:n.props.activeTabIndex},n.handleClick=n.handleClick.bind(Object(p.a)(Object(p.a)(n))),n.handleChange=n.handleChange.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){this.setState({activeTabIndex:e}),this.handleChange(e)}},{key:"handleChange",value:function(e){this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.dtm_rcln_mode,o=t.wrap_dtm_rcln,r=t.wrap_ntb_rcln,s=i.a.Children.map(n,function(t,n){return i.a.cloneElement(t,{active:n===e.state.activeTabIndex})}),c=k()("ntb_rcln",this.props.customClass,{dtm_rcln_ntb:a,wrap_dtm_rcln:o,wrap_ntb_rcln:r});return i.a.createElement("div",{className:c},i.a.createElement("ul",{className:"tabs"},n.map(function(t,n){if("object"===typeof t.props.label){var a=k()({active:n===e.state.activeTabIndex,dot:t.props.dot});return i.a.createElement("li",{key:n,onClick:function(){e.handleClick(n)},className:a},t.props.label)}var o=t.props.label;return i.a.createElement(C,{text:o,key:n,index:n,onClick:e.handleClick,active:n===e.state.activeTabIndex,dot:t.props.dot})})),i.a.createElement("div",{className:"ctns"},s))}}]),t}(a.Component);w.defaultProps={activeTabIndex:0};var y=w,O=(n(25),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onClick=n.onClick.bind(Object(p.a)(Object(p.a)(n))),n.onChange=n.onChange.bind(Object(p.a)(Object(p.a)(n))),n.onMouseDown=n.onMouseDown.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onClick",value:function(e){this.props.whenClick&&this.props.whenClick()}},{key:"onMouseDown",value:function(e){this.props.whenMouseDown&&this.props.whenMouseDown()}},{key:"onChange",value:function(e){this.props.whenChange&&this.props.whenChange(e.target.checked)}},{key:"render",value:function(){var e=k()("cr_rcln",this.props.className,{});return i.a.createElement("label",{className:e},i.a.createElement("input",{type:this.props.type,name:this.props.name,value:this.props.value,id:this.props.id,onClick:this.onClick,onMouseDown:this.onMouseDown,disabled:this.props.disabled,checked:this.props.checked,defaultChecked:this.props.defaultChecked,onChange:this.onChange}),i.a.createElement("span",{className:"indicator"}),i.a.createElement("span",null,this.props.textContent))}}]),t}(a.Component));O.defaultProps={type:"checkbox",textContent:""};var x=O,j=(n(27),function(e){var t=k()("ic_rcln",e.className,e.name,e.size,e.link?"link":null,e.circular?"circular":null,e.border?"border":null,e.color);return i.a.createElement("i",{className:t})});j.defaultProps={className:"",name:"",size:"",link:!1,circular:!1,border:!1,color:""};var E=j,_=(n(13),{}),S=function(e){var t=e.onClick,n=e.isSelected,a=void 0!==n&&n,o=e.text;return i.a.createElement("span",{className:k()("sec_all",{active:a}),onClick:t},o,a?i.a.createElement(E,{name:"toolchoose"}):null)},D=function(e){var t=e.onClick,n=e.isSelected,a=void 0!==n&&n,o=e.text;return i.a.createElement("span",{className:k()("item",{active:a}),onClick:t},o,a?i.a.createElement(E,{name:"toolchoose"}):null)},N=function(e){for(var t=e.title,n=e.data,a=e.parents,o=e.replaceRegular,r=e.onClickItem,s=e.levelKey,c=e.selectedData,l=Object.keys(n),u=-1!==l.indexOf("_"),h=a.join("-"),p={},d=s[s.length-1],v="".concat(h,"-_"),k=0,g=a.length;k<g;k++){var b=s[k];p[b]=a[k]}return i.a.createElement("div",{className:"sec"},i.a.createElement("div",{className:"sec_title"},i.a.createElement(S,{isSelected:-1!==c.indexOf(v),onClick:function(){if(u){var e=Object(f.a)({},p,Object(m.a)({text:"".concat(t,"\u5168\u90e8"),value:v},d,"_"));r(e)}},text:t})),i.a.createElement("div",{className:"sec_content"},l.map(function(e){if("_"===e)return null;var t=n[e],a="".concat(h,"-").concat(e),s=Object(f.a)({},p,Object(m.a)({text:t,value:a},d,e)),l=-1!==c.indexOf(a);return i.a.createElement(D,{key:e,onClick:function(){r(s)},isSelected:l,text:t.replace(o,"")})})))},I=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).dataSource=null,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.dataResouce,n=_[t];"undefined"===typeof n?fetch(t).then(function(e){return e.json()}).then(function(n){console.log(n),_[t]=n,e.dataSource=n,e.forceUpdate()}):(this.dataSource=n,this.forceUpdate())}},{key:"_render",value:function(e){var t=this,n=this.dataSource,a=this.props,o=a.levelKey,r=a.selectedData,s=o.length,c=e.length,l=e[e.length-1],u=o[c],h=0===c?n[u]:n[u][l],p=Object.keys(h),m=s-c<=3,f=m?"one_floor":"search_panel_two";return i.a.createElement(y,{customClass:f},p.map(function(n){var a=Object(d.a)(e).concat([n]),o=r.filter(function(e){return-1!==e.split("-").indexOf(n)}).length>0;return i.a.createElement(b,{key:n,label:h[n],dot:o},m?t._renderLast(a):t._render(a))}))}},{key:"_renderLast",value:function(e){var t=this.dataSource,n=this.props,a=n.levelKey,o=n.replaceRegular,r=n.onClickItem,s=n.selectedData,c=a.length,l=e[e.length-1],u=a[c-2],h=a[c-1],p=t[u][l];return Object.keys(p).map(function(n){var u=Object(d.a)(e).concat([n]);if("_"===n){for(var m={},f=0,v=a.length;f<v;f++){var k=a[f];m[k]=e[f]?e[f]:"_"}var g=a[c-3],b="".concat(u.join("-"),"-").concat(n),C=-1!==s.indexOf(b),w=t[g][l]+"\u5168\u5340";return m.value=b,m.text=w,i.a.createElement("div",{className:"all_wrap",key:n},i.a.createElement(x,{type:"checkbox",textContent:w,whenChange:function(){r(m)},checked:C}))}return i.a.createElement(N,{key:n,title:p[n],data:t[h][n],parents:u,replaceRegular:o,onClickItem:r,levelKey:a,selectedData:s})})}},{key:"render",value:function(){return null===this.dataSource?i.a.createElement("div",null,"\u8f09\u5165\u8cc7\u6599\u4e2d..."):i.a.createElement("div",{className:"dtm_rcfr"},this._render([]))}}]),t}(a.Component);I.defaultProps={selectedData:[]};var V=I,T=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={inputValue:"",innerValue:""},n.textInput=i.a.createRef(),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"focusTextInput",value:function(){this.textInput.current.focus()}},{key:"blurTextInput",value:function(){this.textInput.current.blur()}},{key:"render",value:function(){var e=this,t=!1,n=!!window.chrome&&!!window.chrome.webstore,a=function(a){a.target instanceof HTMLInputElement&&("compositionend"===a.type?(n&&(e.setState({innerValue:a.target.value}),e.props.onTypingFinish(a.target.value)),t=!1):t=!0)};return i.a.createElement("input",Object.assign({type:"text",value:this.props.inputValue,ref:this.textInput,placeholder:"\u8f38\u5165\u57ce\u5e02\u3001\u666f\u9ede\u3001\u9ad4\u9a57\u884c\u7a0b\u6216\u6d3b\u52d5\u540d\u7a31",onCompositionStart:a,onCompositionUpdate:a,onCompositionEnd:a,onChange:function(n){t?(e.setState({inputValue:n.target.value}),e.props.onTyping(n.target.value)):(e.setState({inputValue:n.target.value,innerValue:n.target.value}),e.props.onTypingFinish(n.target.value))},onFocus:function(t){e.props.onFocus(t)},onBlur:function(t){e.props.onBlur(t)}},this.props))}}]),t}(a.Component),M=(n(30),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={select:null},n.newData=[],n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keydown",function(t){return e.whenKeyPress(t)},!0)}},{key:"componentWillReceiveProps",value:function(e){this.props.matchWord!==e.matchWord&&this.setState({select:null})}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("keydown",function(t){return e.whenKeyPress(t)},!0)}},{key:"cloneDataArray",value:function(){for(var e=JSON.parse(JSON.stringify(Object(d.a)(this.props.data))).sort(function(e,t){return e.txt.length-t.txt.length}),t=[],n=0;n<=this.props.rules.length-1;n++)for(var a=0;a<=e.length-1;a++)e[a].level2===this.props.rules[n].title&&t.push(e[a]);return t.map(function(e,t){return e.dataIndex=t,e.Newtxt=e.txt,e}),this.lightingMatchWord(t)}},{key:"lightingMatchWord",value:function(e){var t=this.props.matchWord.trim().split(/\s+/).sort(function(e,t){return e.length-t.length});console.log(this.props.matchWord);var n=e.map(function(e){var n=new RegExp("("+t.join("|").replace(/[-[\]{}()*+?.,\\^$#\s]/g,"\\$&")+")","ig");return n.test(e.txt)?e.Newtxt=e.txt.replace(n,'<span class="red">$1</span>'):e.Newtxt=e.txt,e});return this.newData=n,n}},{key:"getLevel2Groups",value:function(){var e=new Set;return this.cloneDataArray().forEach(function(t){e.add(t.level2)}),Object(d.a)(e)}},{key:"_itemOnClickHandler",value:function(e,t){this.setState({select:e.dataIndex}),this.props.getItemClickValue(e,t)}},{key:"whenKeyPress",value:function(e){if(this.props.isFocus){if(40===e.keyCode){var t=null===this.state.select?0:this.state.select+1;t>=this.props.data.length&&(t=0),this._itemOnClickHandler(this.newData[t],e)}if(38===e.keyCode){var n=null===this.state.select?this.props.data.length-1:this.state.select-1;n<0&&(n=this.props.data.length-1),this._itemOnClickHandler(this.newData[n],e)}}}},{key:"render",value:function(){var e=this,t=k()("act_rajx",this.props.containerClass,{}),n=this.getLevel2Groups(),a=i.a.createElement("div",{className:t,style:this.props.style},this.props.minimumStringQuery&&this.props.showText&&i.a.createElement("div",{className:"m-place"},i.a.createElement("button",{onMouseDown:function(){return e.props.closeBtnOnClick()},className:"close"},"x"),this.props.showText),this.props.minimumStringQuery&&this.props.matchWord.length<this.props.minimumStringQueryLength&&!this.props.showText&&i.a.createElement("div",{className:"m-place"},i.a.createElement("button",{onMouseDown:function(){return e.props.closeBtnOnClick()},className:"close"},"x"),this.props.minimumStringQuery),0===this.props.data.length&&!this.props.showText&&this.props.matchWord.length>=this.props.minimumStringQueryLength&&i.a.createElement("div",{className:"noMatchText"},i.a.createElement("button",{onMouseDown:function(){return e.props.closeBtnOnClick()},className:"close"},"x"),this.props.noMatchText),function(){if(n.length>0&&e.props.matchWord.length>=e.props.minimumStringQueryLength&&!e.props.showText)return n.map(function(t,n){return i.a.createElement("div",{className:k()("section",e.props.sectionClass),key:n},i.a.createElement("span",{className:k()("title",e.props.titleClass)},e.props.rules.find(function(e){return e.title===t}).icon,t),e.cloneDataArray().filter(function(e,n){return e.level2===t}).map(function(t,n){return i.a.createElement("span",{className:k()("item",e.props.itemClass,{select:(e.props.selectedVal?e.props.selectedVal.dataIndex:e.state.select)===t.dataIndex}),key:t.level3,dangerouslySetInnerHTML:{__html:t.Newtxt},onClick:function(){e._itemOnClickHandler(t),e.props.whenSpanClick&&e.props.whenSpanClick()}})}))})}(),!this.props.showText&&this.props.footer&&this.props.matchWord.length>=this.props.minimumStringQueryLength&&this.props.data.length>0&&i.a.createElement("div",{className:"foot"},"\u641c\u5c0b\u66f4\u591a",'"'+this.props.matchWord+'"',"\u7684\u7522\u54c1"));return this.props.style?r.a.createPortal(a,document.body):a}}]),t}(a.Component));M.defaultProps={data:[],rules:[]};var R=n(14),W=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handle=function(e){if(!n.__domNode.contains(e.target)){var t=n.props.onClickOutside;"function"===typeof t&&t(e)}},n.isTouch=!1,n.isClickInSide=!1,n.isUnMounted=!1,n.__domNode=null,n.__wrappedInstance=null,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handle,!0)}},{key:"componentWillUnmount",value:function(){this.isUnMounted=!0,document.removeEventListener("click",this.handle,!0)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=(t.onClickOutside,Object(R.a)(t,["children","onClickOutside"]));return i.a.createElement("div",Object.assign({},a,{ref:function(t){e.__domNode=r.a.findDOMNode(t),e.__wrappedInstance=t}}),n)}}]),t}(a.Component),F=(n(32),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e)))._onClickItem=function(e){n.setState({selectedData:[e],inputValue:e.text,showSearchResult:n.state.width<980,selectedVal:e})},n._onFocusHandle=function(e){console.log("isFocus"),n.setState({showSearchResult:!0})},n._onBlurHandle=function(e){},n._onClickOutSide=function(){var e=n.state,t=e.selectedData,a=e.innerValue,i=e.fetchFinish,o=e.actData,r=e.selectedVal;t.length<=0&&a.length>=2&&i&&o.length>=0&&!r&&n.selectActFirstItem()||n.setState({showSearchResult:n.state.width<980})},n._onClickListItem=function(e,t){n.setState({inputValue:e.txt,showSearchResult:n.state.width<980||(t||!1),selectedVal:e})},n.updateDimensions=function(){n.setState({width:window.innerWidth,height:window.innerHeight})},n.selectActFirstItem=function(){var e=n.state.actData.sort(function(e,t){return e.txt.length-t.txt.length})[0].txt,t=n.state.actData.sort(function(e,t){return e.txt.length-t.txt.length})[0];t.dataIndex=0,n.setState({showSearchResult:n.state.width<980,inputValue:e,selectedVal:t})},n.getDataFromServer=function(e){n.AbortController&&n.AbortController.abort(),n.AbortController=new AbortController;var t=n.AbortController.signal;n.setState({fetchFinish:!1}),console.log("fetching...",e),n.setState({showText:i.a.createElement("div",{className:""},i.a.createElement("span",null,"\u8f09\u5165\u4e2d...")),actData:[]}),fetch("https://tun-hsiang.000webhostapp.com/ajax.php?keyWord="+e,{method:"GET",mode:"cors",signal:t,headers:new Headers({"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"})}).then(function(e){return e.json()}).then(function(t){return n.processData(t,e)}).catch(function(e){return console.error("Request\u5931\u6557 \u539f\u56e0\u662f :",e)})},n.getInputValue=function(){return n.state.selectedVal},n.onTypingFinish=function(e){Object(p.a)(Object(p.a)(n));n.setState({innerValue:e,inputValue:e,selectedData:[],selectedVal:null}),n.getDataFromServer(e)},n.state={selectedData:[],showSearchResult:!1,inputValue:"",innerValue:"",actData:[],selectedVal:null,fetchFinish:null,clientW:window.innerWidth,width:null,height:null},n.AbortController=null,n.textInput=i.a.createRef(),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.updateDimensions()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"processData",value:function(e,t){var n=new Promise(function(t,n){e.Destinations.map(function(e){e.level1=e.Kind,e.level2=e.KindName,e.level3=e.Code,e.txt=e.Name,delete e.Kind,delete e.KindName,delete e.Code,delete e.Name}),t(e)});return this.setState({actData:e.Destinations,searchKeyWord:t,showText:"",fetchFinish:!0}),n}},{key:"render",value:function(){var e=this,t=this.state.selectedData.map(function(e){return e.value});return i.a.createElement(W,{className:"searchContainer",onClickOutside:function(){return e._onClickOutSide()}},i.a.createElement(T,{ref:this.textInput,className:"col-xs-24",inputValue:this.state.inputValue,innerValue:this.state.innerValue,onTypingFinish:this.onTypingFinish,onTyping:function(t){return e.setState({inputValue:t})},onFocus:this._onFocusHandle,onBlur:this._onBlurHandle}),i.a.createElement(M,{containerClass:(this.state.innerValue.length<2||!this.state.showSearchResult)&&"d-no",sectionClass:"",itemClass:"",titleClass:"",data:this.state.actData,matchWord:this.state.innerValue,closeBtnOnClick:function(){return e.setState({showSearchResult:!1})},getItemClickValue:function(t,n){return e._onClickListItem(t,n)},selectedVal:this.state.selectedVal,isFocus:this.state.showSearchResult,showText:this.state.showText,noMatchText:"\u5f88\u62b1\u6b49\uff0c\u627e\u4e0d\u5230\u7b26\u5408\u7684\u9805\u76ee",minimumStringQuery:"\u8acb\u81f3\u5c11\u8f38\u5165\u5169\u500b\u5b57",minimumStringQueryLength:2,footer:!1,rules:[{title:"\u57ce\u5e02",icon:i.a.createElement(E,{name:"toolmapf",key:1})},{title:"\u5340\u57df",icon:i.a.createElement(E,{name:"traffictrafficcruiseshipf",key:2})},{title:"\u884c\u653f\u5340",icon:i.a.createElement(E,{name:"hotelbusinesscen",key:3})},{title:"\u5546\u5708",icon:i.a.createElement(E,{name:"productpricef",key:4})},{title:"\u5730\u6a19",icon:i.a.createElement(E,{name:"hotelwify",key:5})},{title:"\u98ef\u5e97",icon:i.a.createElement(E,{name:"hotelforeignBookingf",key:6})}]}),i.a.createElement("div",{className:this.state.innerValue.length<2&&this.state.showSearchResult?"DtmRcfrContainer":"DtmRcfrContainer d-no"},i.a.createElement("span",{className:"DtmRcfrNotice"},"\u627e\u4e0d\u5230\u9078\u9805\uff1f\u8acb\u8f38\u5165\u95dc\u9375\u5b57\u67e5\u8a62"),i.a.createElement(V,{levelKey:["vLine","vCountry","vCity"],dataResouce:"./abroad.json",replaceRegular:/[a-zA-Z\(\)\s]/g,onClickItem:this._onClickItem,selectedData:t})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(F,null),document.getElementById("activityRoot")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,2,1]]]);
//# sourceMappingURL=main.chunk.js.map