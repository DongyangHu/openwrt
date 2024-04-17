import{aj as x}from"./index-8cf47a1c.js";function h(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function s(e){h(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||x(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var C={};function A(){return C}function P(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function M(e,t){h(2,arguments);var a=s(e),n=s(t),i=a.getTime()-n.getTime();return i<0?-1:i>0?1:i}function X(e,t){h(2,arguments);var a=s(e),n=s(t),i=a.getFullYear()-n.getFullYear(),o=a.getMonth()-n.getMonth();return i*12+o}function _(e,t){return h(2,arguments),s(e).getTime()-s(t).getTime()}var S={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},j="trunc";function I(e){return e?S[e]:S[j]}function R(e){h(1,arguments);var t=s(e);return t.setHours(23,59,59,999),t}function E(e){h(1,arguments);var t=s(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function Y(e){h(1,arguments);var t=s(e);return R(t).getTime()===E(t).getTime()}function z(e,t){h(2,arguments);var a=s(e),n=s(t),i=M(a,n),o=Math.abs(X(a,n)),r;if(o<1)r=0;else{a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-i*o);var l=M(a,n)===-i;Y(s(e))&&o===1&&M(e,n)===1&&(l=!1),r=i*(o-Number(l))}return r===0?0:r}function L(e,t,a){h(2,arguments);var n=_(e,t)/1e3;return I(a==null?void 0:a.roundingMethod)(n)}var V={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},q=function(t,a,n){var i,o=V[t];return typeof o=="string"?i=o:a===1?i=o.one:i=o.other.replace("{{count}}",a.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};const H=q;function w(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,n=e.formats[a]||e.formats[e.defaultWidth];return n}}var J={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},U={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},$={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Q={date:w({formats:J,defaultWidth:"full"}),time:w({formats:U,defaultWidth:"full"}),dateTime:w({formats:$,defaultWidth:"full"})};const B=Q;var G={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},K=function(t,a,n,i){return G[t]};const Z=K;function g(e){return function(t,a){var n=a!=null&&a.context?String(a.context):"standalone",i;if(n==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,r=a!=null&&a.width?String(a.width):o;i=e.formattingValues[r]||e.formattingValues[o]}else{var l=e.defaultWidth,u=a!=null&&a.width?String(a.width):e.defaultWidth;i=e.values[u]||e.values[l]}var f=e.argumentCallback?e.argumentCallback(t):t;return i[f]}}var ee={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},te={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ae={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ne={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},re={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ie={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},oe=function(t,a){var n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},ue={ordinalNumber:oe,era:g({values:ee,defaultWidth:"wide"}),quarter:g({values:te,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:g({values:ae,defaultWidth:"wide"}),day:g({values:ne,defaultWidth:"wide"}),dayPeriod:g({values:re,defaultWidth:"wide",formattingValues:ie,defaultFormattingWidth:"wide"})};const se=ue;function b(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;var r=o[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(l)?de(l,function(m){return m.test(r)}):le(l,function(m){return m.test(r)}),f;f=e.valueCallback?e.valueCallback(u):u,f=a.valueCallback?a.valueCallback(f):f;var c=t.slice(r.length);return{value:f,rest:c}}}function le(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function de(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}function fe(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var i=n[0],o=t.match(e.parsePattern);if(!o)return null;var r=e.valueCallback?e.valueCallback(o[0]):o[0];r=a.valueCallback?a.valueCallback(r):r;var l=t.slice(i.length);return{value:r,rest:l}}}var me=/^(\d+)(th|st|nd|rd)?/i,he=/\d+/i,ce={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ve={any:[/^b/i,/^(a|c)/i]},ge={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},be={any:[/1/i,/2/i,/3/i,/4/i]},Me={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ye={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},we={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},pe={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},De={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Pe={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Se={ordinalNumber:fe({matchPattern:me,parsePattern:he,valueCallback:function(t){return parseInt(t,10)}}),era:b({matchPatterns:ce,defaultMatchWidth:"wide",parsePatterns:ve,defaultParseWidth:"any"}),quarter:b({matchPatterns:ge,defaultMatchWidth:"wide",parsePatterns:be,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:b({matchPatterns:Me,defaultMatchWidth:"wide",parsePatterns:ye,defaultParseWidth:"any"}),day:b({matchPatterns:we,defaultMatchWidth:"wide",parsePatterns:pe,defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:De,defaultMatchWidth:"any",parsePatterns:Pe,defaultParseWidth:"any"})};const Te=Se;var We={code:"en-US",formatDistance:H,formatLong:B,formatRelative:Z,localize:se,match:Te,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ne=We;function W(e,t){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}function ke(e){return W({},e)}var T=1440,Oe=2520,p=43200,Fe=86400;function Ce(e,t,a){var n,i;h(2,arguments);var o=A(),r=(n=(i=a==null?void 0:a.locale)!==null&&i!==void 0?i:o.locale)!==null&&n!==void 0?n:Ne;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var l=M(e,t);if(isNaN(l))throw new RangeError("Invalid time value");var u=W(ke(a),{addSuffix:!!(a!=null&&a.addSuffix),comparison:l}),f,c;l>0?(f=s(t),c=s(e)):(f=s(e),c=s(t));var m=L(c,f),N=(P(c)-P(f))/1e3,d=Math.round((m-N)/60),v;if(d<2)return a!=null&&a.includeSeconds?m<5?r.formatDistance("lessThanXSeconds",5,u):m<10?r.formatDistance("lessThanXSeconds",10,u):m<20?r.formatDistance("lessThanXSeconds",20,u):m<40?r.formatDistance("halfAMinute",0,u):m<60?r.formatDistance("lessThanXMinutes",1,u):r.formatDistance("xMinutes",1,u):d===0?r.formatDistance("lessThanXMinutes",1,u):r.formatDistance("xMinutes",d,u);if(d<45)return r.formatDistance("xMinutes",d,u);if(d<90)return r.formatDistance("aboutXHours",1,u);if(d<T){var k=Math.round(d/60);return r.formatDistance("aboutXHours",k,u)}else{if(d<Oe)return r.formatDistance("xDays",1,u);if(d<p){var O=Math.round(d/T);return r.formatDistance("xDays",O,u)}else if(d<Fe)return v=Math.round(d/p),r.formatDistance("aboutXMonths",v,u)}if(v=z(c,f),v<12){var F=Math.round(d/p);return r.formatDistance("xMonths",F,u)}else{var D=v%12,y=Math.floor(v/12);return D<3?r.formatDistance("aboutXYears",y,u):D<9?r.formatDistance("overXYears",y,u):r.formatDistance("almostXYears",y+1,u)}}export{Ce as f};
