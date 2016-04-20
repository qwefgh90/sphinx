var selectNodes=function(doc,path,contextNode){contextNode=contextNode?contextNode:doc;var xpath=new XPathEvaluator,result=xpath.evaluate(path,contextNode,doc.createNSResolver(doc.documentElement),XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),nodeList=new Array(result.snapshotLength);for(var i=0;i<result.snapshotLength;i++)nodeList[i]=result.snapshotItem(i);return nodeList},selectSingleNode=function(doc,path,contextNode){path+="[1]";var nodes=selectNodes(doc,path,contextNode);if(nodes.length!=0)for(var i=0;i<nodes.length;i++)if(nodes[i])return nodes[i];return null};function __loadCompat(w){w.Debug=function(){};w.Debug._fail=function(message){throw new Error(message)};w.Debug.writeln=function(text){if(window.console)window.console.debug(text)};w.__getNonTextNode=function(node){try{while(node&&node.nodeType!=1)node=node.parentNode}catch(ex){node=null}return node}}function _loadSafariCompat(w){Node.prototype.__defineGetter__("text",function(){return this.textContent});Node.prototype.__defineSetter__("text",function(value){this.textContent=value});Node.prototype.selectNodes=function(path){var doc=this.ownerDocument;return selectNodes(doc,path,this)};Node.prototype.selectSingleNode=function(path){var doc=this.ownerDocument;return selectSingleNode(doc,path,this)};Document.prototype.selectNodes=function(path){return selectNodes(this,path,this.documentElement)};Document.prototype.selectSingleNode=function(path){return selectSingleNode(this,path,this.documentElement)}}function _loadMozillaCompat(w){w.navigate=function(url){window.setTimeout('window.location = "'+url+'";',0)};var attachEventProxy=function(eventName,eventHandler){eventHandler._mozillaEventHandler=function(e){window.event=e;eventHandler();return e.returnValue};this.addEventListener(eventName.slice(2),eventHandler._mozillaEventHandler,false)},detachEventProxy=function(eventName,eventHandler){if(eventHandler._mozillaEventHandler){var mozillaEventHandler=eventHandler._mozillaEventHandler;delete eventHandler._mozillaEventHandler;this.removeEventListener(eventName.slice(2),mozillaEventHandler,false)}};w.attachEvent=attachEventProxy;w.detachEvent=detachEventProxy;w.HTMLDocument.prototype.attachEvent=attachEventProxy;w.HTMLDocument.prototype.detachEvent=detachEventProxy;w.HTMLElement.prototype.attachEvent=attachEventProxy;w.HTMLElement.prototype.detachEvent=detachEventProxy;w.Event.prototype.__defineGetter__("srcElement",function(){return __getNonTextNode(this.target)||this.currentTarget});w.Event.prototype.__defineGetter__("cancelBubble",function(){return this._bubblingCanceled||false});w.Event.prototype.__defineSetter__("cancelBubble",function(v){if(v){this._bubblingCanceled=true;this.stopPropagation()}});w.Event.prototype.__defineGetter__("returnValue",function(){return !this._cancelDefault});w.Event.prototype.__defineSetter__("returnValue",function(v){if(!v){this._cancelDefault=true;this.preventDefault()}});w.Event.prototype.__defineGetter__("fromElement",function(){var n;if(this.type=="mouseover")n=this.relatedTarget;else if(this.type=="mouseout")n=this.target;return __getNonTextNode(n)});w.Event.prototype.__defineGetter__("toElement",function(){var n;if(this.type=="mouseout")n=this.relatedTarget;else if(this.type=="mouseover")n=this.target;return __getNonTextNode(n)});w.Event.prototype.__defineGetter__("button",function(){return this.which==1?1:this.which==3?2:0});w.HTMLElement.prototype.__defineGetter__("parentElement",function(){return this.parentNode});w.HTMLElement.prototype.__defineGetter__("children",function(){var children=[],childCount=this.childNodes.length;for(var i=0;i<childCount;i++){var childNode=this.childNodes[i];if(childNode.nodeType==1)children.push(childNode)}return children});w.HTMLElement.prototype.__defineGetter__("innerText",function(){try{return this.textContent}catch(ex){var text="";for(var i=0;i<this.childNodes.length;i++)if(this.childNodes[i].nodeType==3)text+=this.childNodes[i].textContent;return str}});w.HTMLElement.prototype.__defineSetter__("innerText",function(v){var textNode=document.createTextNode(v);this.innerHTML="";this.appendChild(textNode)});w.HTMLElement.prototype.__defineGetter__("currentStyle",function(){return window.getComputedStyle(this,null)});w.HTMLElement.prototype.__defineGetter__("runtimeStyle",function(){return window.getOverrideStyle(this,null)});w.HTMLElement.prototype.removeNode=function(b){return this.parentNode.removeChild(this)};w.HTMLElement.prototype.contains=function(el){while(el!=null&&el!=this)el=el.parentNode;return el!=null};w.HTMLStyleElement.prototype.__defineGetter__("styleSheet",function(){return this.sheet});w.CSSStyleSheet.prototype.__defineGetter__("rules",function(){return this.cssRules});w.CSSStyleSheet.prototype.addRule=function(selector,style,index){this.insertRule(selector+"{"+style+"}",index)};w.CSSStyleSheet.prototype.removeRule=function(index){this.deleteRule(index)};w.CSSStyleDeclaration.prototype.__defineGetter__("styleFloat",function(){return this.cssFloat});w.CSSStyleDeclaration.prototype.__defineSetter__("styleFloat",function(v){this.cssFloat=v});DocumentFragment.prototype.getElementById=function(id){var nodeQueue=[],childNodes=this.childNodes,node,c;for(c=0;c<childNodes.length;c++){node=childNodes[c];if(node.nodeType==1)nodeQueue.queue(node)}while(nodeQueue.length){node=nodeQueue.dequeue();if(node.id==id)return node;childNodes=node.childNodes;if(childNodes.length!=0)for(c=0;c<childNodes.length;c++){node=childNodes[c];if(node.nodeType==1)nodeQueue.queue(node)}}return null};DocumentFragment.prototype.getElementsByTagName=function(tagName){var elements=[],nodeQueue=[],childNodes=this.childNodes,node,c;for(c=0;c<childNodes.length;c++){node=childNodes[c];if(node.nodeType==1)nodeQueue.queue(node)}while(nodeQueue.length){node=nodeQueue.dequeue();if(node.tagName==tagName)elements.add(node);childNodes=node.childNodes;if(childNodes.length!=0)for(c=0;c<childNodes.length;c++){node=childNodes[c];if(node.nodeType==1)nodeQueue.queue(node)}}return elements};DocumentFragment.prototype.createElement=function(tagName){return document.createElement(tagName)};w.XMLDocument.prototype.selectNodes=function(path,contextNode){return selectNodes(this,path,contextNode)};w.XMLDocument.prototype.selectSingleNode=function(path,contextNode){return selectSingleNode(this,path,contextNode)};Node.prototype.selectNodes=function(path){var doc=this.ownerDocument;return doc.selectNodes(path,this)};Node.prototype.selectSingleNode=function(path){var doc=this.ownerDocument;return doc.selectSingleNode(path,this)};Node.prototype.__defineGetter__("baseName",function(){return this.localName});Node.prototype.__defineGetter__("text",function(){return this.textContent});Node.prototype.__defineSetter__("text",function(value){this.textContent=value});Node.prototype.__defineGetter__("xml",function(){return (new XMLSerializer).serializeToString(this)})}__loadCompat(window);if(window.navigator.userAgent.indexOf("Safari")<0)_loadMozillaCompat(window);else _loadSafariCompat(window)