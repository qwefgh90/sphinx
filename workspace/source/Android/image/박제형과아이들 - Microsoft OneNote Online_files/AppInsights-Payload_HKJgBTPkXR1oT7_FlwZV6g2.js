﻿var appInsights,AppInsights;(function(n){(function(n){"use strict";var t,i,r;(function(n){n[n.string=0]="string",n[n.number=1]="number",n[n.object=2]="object"})(n.dataTypes||(n.dataTypes={})),t=n.dataTypes,function(n){n[n.page=0]="page",n[n.link=1]="link",n[n.event=2]="event",n[n.timed=3]="timed",n[n.action=4]="action",n[n.perf=5]="perf",n[n.error=6]="error",n[n.ierror=7]="ierror"}(n.payloadTypes||(n.payloadTypes={})),i=n.payloadTypes,function(n){n[n.ProfileId=0]="ProfileId",n[n.UserIdentity=1]="UserIdentity",n[n.Referrer=2]="Referrer",n[n.Language=3]="Language",n[n.TimeZone=4]="TimeZone",n[n.Screen=5]="Screen",n[n.TargetPage=6]="TargetPage",n[n.Events=7]="Events",n[n.CustomUserId=8]="CustomUserId",n[n.AccountId=9]="AccountId",n[n.CustomDimensions=10]="CustomDimensions",n[n.CustomMetrics=11]="CustomMetrics",n[n.CookieCreationDate=12]="CookieCreationDate",n[n.PagePerformance=13]="PagePerformance",n[n.Error=14]="Error",n[n.InternalError=15]="InternalError",n[n.IsDeveloperData=16]="IsDeveloperData",n[n.ScriptAction=17]="ScriptAction",n[n.ScriptVersion=18]="ScriptVersion",n[n.SourceType=19]="SourceType"}(n.parameterNames||(n.parameterNames={})),r=n.parameterNames})(n.Internal||(n.Internal={}));var t=n.Internal})(AppInsights||(AppInsights={})),appInsights=appInsights||{},function(n){(function(n){"use strict";var t="dc.services.visualstudio.com",i="f5.services.visualstudio.com",r="_da.gif",u="stats",f=18,e="js",o=2e3,s=function(){function n(){this.cookieName="aiInfo",this.maxVisitorCookieLifeMS=63072e6,this.maxSessionLiftMS=18e5}return n.prototype.getImageHost=function(){return t},n.prototype.getImageFile=function(){return r},n.prototype.getDeveloperImageHost=function(){return i},n.prototype.getPostHandler=function(){return u},n.prototype.getVersion=function(){return f},n.prototype.getSourceType=function(){return e},n.prototype.getMaxUrlLength=function(){return o},n}();n.Settings=s})(n.Internal||(n.Internal={}));var t=n.Internal}(AppInsights||(AppInsights={})),function(n){(function(n){"use strict";function t(n){return!r.isNullOrUndefined(n)}function i(i,r){return t(i)&&typeof i===n.dataTypes[r]}function e(n){return i(n,1)||(n=parseFloat(n)),!isNaN(n)&&isFinite(n)}function o(n){if(t(n)){var i=n.profiles?n.profiles[n.activeProfile]:null,r=n.profiles?n.profiles.defaults:null;return t(i)&&(!t(i.componentId)&&t(r)&&(i.componentId=r.componentId),!t(i.sendToRawStream)&&t(r)&&(i.sendToRawStream=r.sendToRawStream)),i}return null}function s(n){return n=n/1e3,parseFloat(((n-315532800)/86400).toFixed(0))}function h(n){return typeof n=="undefined"&&(n=null),n=n||new Date,-Math.round(n.getTimezoneOffset()/60)}var c,r,u,l,f,a;n.assertValue=t,n.assertType=i,n.isNumeric=e,n.getActiveProfile=o,function(n){function t(n,t,i,u){var o="",f,e;return!r.isNullOrUndefined(n)&&n.length>0&&(f=n.indexOf(t),f!==-1&&(u||(f=f+t.length),e=n.indexOf(i,f),e===-1&&(e=n.length),o=n.substring(f,e))),o}function u(n,t,r){if(i(n,0)&&n.length>0&&i(r,1)&&i(t,1)){var u=n.substring(0,t);return r>-1&&(u+=n.substring(r)),u}return""}n.substring=t,n.remove=u}(n.Strings||(n.Strings={})),c=n.Strings,function(n){function t(n){return typeof n=="undefined"||n===null}function i(){var n=null;try{n=window.localStorage}catch(t){}return n}function r(){var n=null;try{n=window.sessionStorage}catch(t){}return n}n.isNullOrUndefined=t,n.getWindowLocalStorage=i,n.getWindowSessionStorage=r}(n.Extensions||(n.Extensions={})),r=n.Extensions,function(n){function t(){var n=new Date,t=n.getTime(),i=n.getTimezoneOffset()*6e4;return t+i}function r(){return+new Date}function u(n,t){if(!i(n,1)||!i(t,1)||n===0||t===0)return 0;var r=t-n;return Math.max(r,0)}n.utcNow=t,n.now=r,n.getDuration=u}(n.DateTime||(n.DateTime={})),u=n.DateTime,function(n){function t(){return!r.isNullOrUndefined(window.performance)&&!r.isNullOrUndefined(window.performance.timing)&&!r.isNullOrUndefined(window.performance.timing.responseStart)}n.supportsPerformanceTimingApi=t}(n.Browser||(n.Browser={})),l=n.Browser,f=function(){function n(){this.netCon=u.getDuration(window.performance.timing.navigationStart,window.performance.timing.connectEnd),this.sendReq=u.getDuration(window.performance.timing.requestStart,window.performance.timing.responseStart),this.recResp=u.getDuration(window.performance.timing.responseStart,window.performance.timing.responseEnd),this.clientProc=u.getDuration(window.performance.timing.domLoading,window.performance.timing.loadEventEnd),this.ptotal=u.getDuration(window.performance.timing.domainLookupStart,window.performance.timing.loadEventEnd)}return n}(),n.PageMetrics=f,function(n){function t(){var i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],n=[],r,t;for(n[8]=n[13]=n[18]=n[23]="-",n[14]="4",t=0;t<36;t++)n[t]||(r=Math.floor(Math.random()*i.length),n[t]=i[r]);return n.join("")}n.create=t}(n.UniqueId||(n.UniqueId={})),a=n.UniqueId,n.getDaysSince1980=s,n.calculateTimezone=h})(n.Internal||(n.Internal={}));var t=n.Internal}(AppInsights||(AppInsights={})),function(n){(function(n){"use strict";var t=function(){function n(n,t,i){this.visitor=n,this.visit=t,this.createdDate=i}return n}();n.User=t,n.valueDelimiter="|",n.applicationsDelimiter="||"})(n.Internal||(n.Internal={}));var t=n.Internal}(AppInsights||(AppInsights={})),function(n){(function(n){"use strict";function f(i){var f=null,r=i.split(n.valueDelimiter),e,u;return n.Extensions.isNullOrUndefined(r)||r.length!==5||(e=parseInt(r[3],10),u=parseInt(r[4],10),isNaN(u)||(f=new t(r[0],r[1],r[2],e,u))),f}var e=4e3,o=10,t=function(){function t(n,t,i,r,u){this.instrumentKey=n,this.visitorId=t,this.visitId=i,this.creationtime=r,this.lastUpdateTime=u}return t.prototype.serialize=function(){return this.instrumentKey+n.valueDelimiter+this.visitorId+n.valueDelimiter+this.visitId+n.valueDelimiter+this.creationtime+n.valueDelimiter+this.lastUpdateTime},t}(),i,r,u;n.StorageApplication=t,i=function(){function t(n,t){this.settings=n,this.cookieStorage=t||document}return t.prototype.enabled=function(t){var u=this,i=!1,r;return n.Extensions.isNullOrUndefined(this.cookieStorage.cookie)||(r=function(){return u.cookieStorage.cookie.indexOf(t)!==-1},r()?i=!0:(this.cookieStorage.cookie=t,i=r())),i},t.prototype.setValue=function(n,t){var i=!1,r,u;try{r=new Date(+new Date+this.settings.maxVisitorCookieLifeMS),this.cookieStorage.cookie=n+"="+encodeURIComponent(t)+";expires="+r.toUTCString()+";path=/",u=this.getValue(n),i=u===t}catch(f){}return i},t.prototype.getValue=function(t){return decodeURIComponent(n.Strings.substring(this.cookieStorage.cookie,t+"=",";",!1))},t}(),n.Cookies=i,r=function(){function t(n,t){this.cookies=n,this.settings=t}return t.prototype.enabled=function(){return this.cookies.enabled(this.settings.cookieName)},t.prototype.updateApplication=function(n){var t=this.cookies.getValue(this.settings.cookieName);return t.length>e&&(t=this.getShrinkCookie(t)),t=this.getRemoveApplicationCookie(n,t),t=this.getAddApplicationCookie(n,t),this.cookies.setValue(this.settings.cookieName,t)},t.prototype.getApplication=function(t){var r=null,u=this.cookies.getValue(this.settings.cookieName),i;return u!==""&&(i=n.Strings.substring(u,t,n.applicationsDelimiter,!0),i!==""&&(r=f(i))),r},t.prototype.getRemoveApplicationCookie=function(t,i){var f=i,r,u;return i!==""&&(r=i.indexOf(t.instrumentKey),r!==-1&&(u=i.indexOf(n.applicationsDelimiter,r),u>=0&&(u+=n.applicationsDelimiter.length-1),f=n.Strings.remove(i,r,u))),f},t.prototype.getAddApplicationCookie=function(t,i){var r=t.serialize();return i!==""&&(r+=n.applicationsDelimiter),r+i},t.prototype.getShrinkCookie=function(t){for(var r="",i=t.length-1,u=0;u<o;u++)if(i=t.lastIndexOf(n.applicationsDelimiter,i)-1,i<0)break;return i>0&&(r=t.substring(0,i)),r},t}(),n.StorageApplicationManager=r,u=function(){function u(n,t,u){this.settings=n,this.cookies=t||new i(this.settings,document),this.appInsights=u||appInsights,this.visitor=null,this.visit=null,this.createdOn=null,this.applicationManager=new r(this.cookies,this.settings)}return u.prototype.getUser=function(t){var i=null;return this.initialize(t)&&(i=new n.User(this.visitor,this.visit,this.createdOn)),i},u.prototype.initialize=function(i){var f=!1,u;if(this.applicationManager.enabled()){var r=this.applicationManager.getApplication(this.appInsights.applicationInsightsId),e=n.DateTime.utcNow(),o=e-i;n.Extensions.isNullOrUndefined(r)?r=new t(this.appInsights.applicationInsightsId,n.UniqueId.create(),n.UniqueId.create(),n.DateTime.now(),o):r.lastUpdateTime=e,this.applicationManager.updateApplication(r)?(this.visitor=r.visitorId,this.visit=r.visitId,this.createdOn=n.getDaysSince1980(r.creationtime).toString()):(u=this.applicationManager.getApplication(this.appInsights.applicationInsightsId),n.Extensions.isNullOrUndefined(u)&&(u.visitorId===r.visitorId&&(this.visitor=r.visitorId),u.visitId===r.visitId&&(this.visit=r.visitId),u.creationtime===r.creationtime&&(this.createdOn=r.creationtime.toString()))),f=!0}return f},u}(),n.CookieStorage=u})(n.Internal||(n.Internal={}));var t=n.Internal}(AppInsights||(AppInsights={})),function(n){(function(n){"use strict";var t=function(){function t(n,t,i){this.settings=t,this.cookieStorage=n,this.appInsights=i||appInsights}return t.prototype.getUser=function(t){function e(n){i===null&&(i=s.getUser(n))}var i=null,s=this.cookieStorage,f=this.getStorageInfo(n.Extensions.getWindowLocalStorage(),"uid",this.settings.maxVisitorCookieLifeMS,t,function(){return n.UniqueId.create()}),r,u,o;return f===null&&(e(t),n.Extensions.isNullOrUndefined(i)||(f=i.Visitor)),r=this.getStorageInfo(n.Extensions.getWindowLocalStorage(),"ica",this.settings.maxVisitorCookieLifeMS,t,function(){return""+n.getDaysSince1980(n.DateTime.now())}),r===null&&(e(t),n.Extensions.isNullOrUndefined(i)||(r=i.CreatedDate)),u=this.getStorageInfo(n.Extensions.getWindowSessionStorage(),"sid",this.settings.maxSessionLiftMS,t,function(){return n.UniqueId.create()}),u===null&&(e(t),n.Extensions.isNullOrUndefined(i)||(u=i.Visit)),o=null,(f!==null||u!==null||r!==null)&&(o=new n.User(f,u,r)),o},t.prototype.getStorageInfo=function(t,i,r,u,f){var c=this.appInsights.applicationInsightsId+i,l=null,a,o,e,s,v,h,y;if(!n.Extensions.isNullOrUndefined(t)){a=n.DateTime.utcNow(),o=null;try{o=t.getItem(c)}catch(p){}if(e=null,n.assertType(o,0)&&(s=o.split(n.valueDelimiter),s.length===2&&(v=parseInt(s[0],10),isNaN(v)||(h=n.DateTime.getDuration(v,a),h=h-u,h<r&&(e=s[1])))),n.Extensions.isNullOrUndefined(e))try{e=f(),y=a-u+n.valueDelimiter+e,t.setItem(c,y),t.getItem(c)===y&&(l=e)}catch(w){}else l=e}return l},t}();n.DomStorage=t})(n.Internal||(n.Internal={}));var t=n.Internal}(AppInsights||(AppInsights={})),function(n){(function(n){var t=function(){function t(t,i,r,u){this.name=t,this.value=i,this.alias=r,this.isLooseData=u,n.assertValue(u)||(this.isLooseData=!1)}return t}(),r,i;n.PayloadParameter=t,r=function(){function t(t){this.settings=t,this.localAppInsights=appInsights,this.profile=n.getActiveProfile(appInsights.configuration)||null,this.userIdentityProvider=new n.UserIdentityProviderImpl(this.settings),this.basePayload=this.createDefaultPayload()}return t.prototype.setDefaultTargetPage=function(n){this.basePayload.setTargetPage(n)},t.prototype.createDefaultPayload=function(){var t=new i,r,u,f;return t.setIsDeveloperData(this.profile?this.profile.sendToRawStream:!1),t.setProfileId(this.localAppInsights.applicationInsightsId),t.setScriptVersion(this.settings.getVersion()),t.setSourceType(this.settings.getSourceType()),t.setTargetPage(location.href),r=this.userIdentityProvider.getUserIdentity(),n.assertValue(r)&&(t.setUserIdentity(r.visitor),t.setCookieCreationDate(r.createdDate)),t.setScreen(screen.width+"x"+screen.height+"x"+screen.colorDepth),t.setLanguage(!document.all||navigator.userAgent.match("Opera")?navigator.language:navigator.userLanguage),u=document.referrer.match(/^(?:f|ht)tp(?:s)?\:\/\/([^/|:]+)/im),f=u!==null&&u.length>=2?u[1]:null,f!==null&&f!==window.location.hostname&&t.setReferrer(document.referrer.split("?")[0].split("#")[0]),t.setTimeZone(n.calculateTimezone()),t},t.prototype.createNewPayload=function(){var t=new i(this.basePayload);return n.assertType(this.localAppInsights.appUserId,0)&&t.setCustomUserId(this.localAppInsights.appUserId),n.assertType(this.localAppInsights.accountId,0)&&t.setAccountId(this.localAppInsights.accountId),t},t}(),n.AnalyticsPayloadFactory=r,i=function(){function i(t){var r,i,u;if(this.payload={},this.location=document.location,!n.Extensions.isNullOrUndefined(t))for(r=t.getParameters(),i=0;i<r.length;i++)u=r[i],this.setParameter(t.getParameter(u))}return i.prototype.getParameter=function(i){var r=this.payload[n.parameterNames[i]];return r===undefined?undefined:new t(i,r.value,r.alias,r.isLooseData)},i.prototype.setParameter=function(t){this.payload[n.parameterNames[t.name]]={value:t.value,alias:t.alias,isLooseData:t.isLooseData}},i.prototype.removeParameter=function(t){delete this.payload[n.parameterNames[t]]},i.prototype.hasParameter=function(t){return n.assertValue(this.payload[n.parameterNames[t]])},i.prototype.getParameters=function(){var i=[],t;for(t in this.payload)this.payload.hasOwnProperty(t)&&i.push(n.parameterNames[t]);return i},i.prototype.setProfileId=function(n){this.setParameter(new t(0,n,"pid",!0))},i.prototype.setUserIdentity=function(n){this.setParameter(new t(1,n,"uid",!0))},i.prototype.setReferrer=function(n){this.setParameter(new t(2,n,"rf"))},i.prototype.setLanguage=function(n){this.setParameter(new t(3,n,"lng",!0))},i.prototype.setTimeZone=function(n){this.setParameter(new t(4,n,"tz",!0))},i.prototype.setScreen=function(n){this.setParameter(new t(5,n,"scr",!0))},i.prototype.setTargetPage=function(n){this.setParameter(new t(6,n,"tp",!0))},i.prototype.setEvents=function(n){this.setParameter(new t(7,n,"evt"))},i.prototype.setCustomUserId=function(n){this.setParameter(new t(8,n,"cuid"))},i.prototype.setAccountId=function(n){this.setParameter(new t(9,n,"aid"))},i.prototype.setCustomDimensions=function(n){this.setParameter(new t(10,n,"prp"))},i.prototype.setCustomMetrics=function(n){this.setParameter(new t(11,n,"met"))},i.prototype.setCookieCreationDate=function(n){this.setParameter(new t(12,n,"ica"))},i.prototype.setPagePerformance=function(n){this.setParameter(new t(13,n,"perf"))},i.prototype.setError=function(n){this.setParameter(new t(14,n,"error"))},i.prototype.setInternalError=function(n){this.setParameter(new t(15,n,"interror"))},i.prototype.setIsDeveloperData=function(n){this.setParameter(new t(16,n,"idd",!0))},i.prototype.setScriptAction=function(i){this.setParameter(new t(17,n.payloadTypes[i],"jsa",!0))},i.prototype.setScriptVersion=function(n){this.setParameter(new t(18,n,"jsv",!0))},i.prototype.setSourceType=function(n){this.setParameter(new t(19,n,"st",!0))},i.prototype.send=function(n){var r,e,u;try{r=this.location.protocol,r.indexOf("http")!==0&&(r="http:");var i=this.toString(),o=this.getParameter(16),s=o!==undefined&&o.value===!0,f=r+"//"+(s?n.getDeveloperImageHost():n.getImageHost())+"/",t=new XMLHttpRequest;return"withCredentials"in t?(t.onload=function(){return},t.onerror=function(){return},i.length>=n.getMaxUrlLength()?(t.open("POST",f+n.getPostHandler(),!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded")):(t.open("GET",f+n.getImageFile()+"?"+i,!0),i=null),t.send(i)):(e=f+n.getImageFile()+"?"+i,u=document.createElement("script"),u.async=!0,u.src=e,document.getElementsByTagName("head")[0].appendChild(u)),!0}catch(h){return!1}},i.prototype.toString=function(){for(var t=[],u={},f=this.getParameters(),i=0;i<f.length;i++){var r=this.getParameter(f[i]),e=r.value,o=r.alias;r.isLooseData?t.push(o+"="+encodeURIComponent(e.toString())):u[o]=e}return t.push("data="+encodeURIComponent(JSON.stringify(u))),t.push("rnd="+n.DateTime.now().toString()),t.join("&")},i}(),n.AnalyticsPayload=i})(n.Internal||(n.Internal={}));var t=n.Internal}(AppInsights||(AppInsights={})),function(n){(function(n){"use strict";var t=function(){function t(n){this.cookieStorage=null,this.domStorage=null,this.settings=n}return t.prototype.getUserIdentity=function(){return this.getBrowserStorage().getUser(0)},t.prototype.getCookieStorage=function(){return this.cookieStorage===null&&(this.cookieStorage=new n.CookieStorage(this.settings)),this.cookieStorage},t.prototype.getBrowserStorage=function(){if(this.domStorage===null){var t=n.Extensions.getWindowSessionStorage(),i=n.Extensions.getWindowLocalStorage();this.domStorage=n.Extensions.isNullOrUndefined(t)||n.Extensions.isNullOrUndefined(i)?this.getCookieStorage():new n.DomStorage(this.getCookieStorage(),this.settings)}return this.domStorage},t}();n.UserIdentityProviderImpl=t})(n.Internal||(n.Internal={}));var t=n.Internal}(AppInsights||(AppInsights={})),function(n){(function(n){"use strict";var u=function(){function n(n){var t=n.lastIndexOf("/");this.eN=n.substr(t+1),this.eP=t>-1?n.substring(0,t):"",this.eV=""}return n}(),t,i,r;n.SimpleEvent=u,t=function(){function n(n,t){this.pN=n,this.pV=t}return n}(),n.SimpleProperty=t,i=function(){function n(n,t,i){this.message=n,this.url=t,this.lineNumber=i,this.message=n,this.url=t,this.lineNumber=i}return n}(),n.ErrorData=i,r=function(){function n(n,t,i,r,u){this.Id=n,this.Stack=t,this.Type=i,this.Message=r,this.Params=u}return n}(),n.InternalErrorData=r})(n.Internal||(n.Internal={}));var t=n.Internal}(AppInsights||(AppInsights={})),function(n){(function(n){"use strict";var t=function(){function t(t){this.pagePerformanceTrackingEnabled=!0,this.settings=t,this.payloadFactory=new n.AnalyticsPayloadFactory(this.settings)}return t.prototype.logEvent=function(t,i,r){var u=this;return this.tryCatchTraceWrapper("logEvent",function(){var f=u.payloadFactory.createNewPayload();return f.setScriptAction(2),f.setEvents([new n.SimpleEvent(t)]),u.addCustomPropertiesAndMetrics(f,i,r),f.send(u.settings)},arguments)},t.prototype.logPageView=function(t,i,r){var u=this;return this.tryCatchTraceWrapper("logPageView",function(){var f=u.payloadFactory.createNewPayload();return f.setScriptAction(0),n.assertType(t,0)&&(f.setTargetPage(t),u.payloadFactory.setDefaultTargetPage(t)),u.addCustomPropertiesAndMetrics(f,i,r),f.send(u.settings)},arguments)},t.prototype.trackPagePerformance=function(){var t=this;return this.tryCatchTraceWrapper("trackPagePerformance",function(){var i=t.payloadFactory.createNewPayload();return i.setPagePerformance(new n.PageMetrics),i.setScriptAction(5),i.send(t.settings)},arguments)},t.prototype.trackError=function(t,i,r){var u=this;return this.tryCatchTraceWrapper("trackError",function(){var f=u.payloadFactory.createNewPayload();return f.setError(new n.ErrorData(t,i,r)),f.setScriptAction(6),f.send(u.settings)},arguments)},t.prototype.trackPagePerformanceImpl=function(){var t=this;return this.tryCatchTraceWrapper("trackPagePerformance",function(){if(!n.Browser.supportsPerformanceTimingApi())return!1;var i=function(){t.pagePerformanceTrackingEnabled&&(window.performance.timing.loadEventEnd!==0?t.trackPagePerformance():setTimeout(i,500))};return setTimeout(i,500),!0},arguments)},t.prototype.enablePagePerformanceTracking=function(){this.pagePerformanceTrackingEnabled=!0,this.trackPagePerformanceImpl()},t.prototype.disablePagePerformanceTracking=function(){this.pagePerformanceTrackingEnabled=!1},t.prototype.tryCatchTraceWrapper=function(t,i,r){var u,o,f,e;try{return i()}catch(s){if(u=new n.InternalErrorData(t),n.Extensions.isNullOrUndefined(s)||(!n.Extensions.isNullOrUndefined(s.stack)&&s.stack.length>0&&(u.Stack=s.stack),u.Type=s.name,u.Message=s.message),!n.Extensions.isNullOrUndefined(r)){for(o=[],f=0;f<r.length;f++)o.push(r[f]);u.Params=o}e=this.payloadFactory.createNewPayload(),e.setScriptAction(7),e.setInternalError(u);try{e.send(this.settings)}catch(h){}return null}},t.prototype.addCustomPropertiesAndMetrics=function(t,i,r){var e,u,o,f,s;if(n.assertType(i,2)){e=[];for(u in i)n.Extensions.isNullOrUndefined(i[u])||e.push(new n.SimpleProperty(u,i[u].toString()));t.setCustomDimensions(e)}if(n.assertType(r,2)){o=[];for(f in r)n.Extensions.isNullOrUndefined(r[f])||(s=r[f],n.isNumeric(s)&&o.push(new n.SimpleProperty(f,s)));t.setCustomMetrics(o)}return t},t}();n.AIClient=t})(n.Internal||(n.Internal={}));var t=n.Internal}(AppInsights||(AppInsights={})),function(n){(function(n){"use strict";function t(t){var i=new n.AIClient(t);return appInsights.logEvent=function(n,t,r){return i.logEvent(n,t,r)},appInsights.logPageView=function(n,t,r){return i.logPageView(n,t,r)},appInsights.enablePagePerformanceTracking=function(){return i.enablePagePerformanceTracking()},appInsights.disablePagePerformanceTracking=function(){return i.disablePagePerformanceTracking()},i}function i(n){while(n.length>0){var t=n.shift();t()}}var r=n.getActiveProfile(appInsights.configuration)||null,u;appInsights.applicationInsightsId=appInsights.applicationInsightsId||(r?r.componentId:""),appInsights.accountId=appInsights.accountId||null,appInsights.appUserId=appInsights.appUserId||null,n.resetClient=t,n.callFunctions=i;try{u=t(new n.Settings),u.enablePagePerformanceTracking(),appInsights.queue instanceof Array&&i(appInsights.queue)}catch(f){}})(n.Internal||(n.Internal={}));var t=n.Internal}(AppInsights||(AppInsights={}))