if(Utils){(function(){var h=Utils.is.document,d=Utils.is.hostObject,j,e,a,i,m,g,o;j=(function(){var p=null;if(global.document){if(typeof global.document==="object"){p=global.document}}return p}());function n(s,q){var r="createElement",p=null;if(h(s)){p=s[r](q)}return p}e=(function(){var q="createElement",p=null;if(h(j)){if(d(j[q])){p=n}}return p}());function c(t,s,q){var r="createElementNS",p=null;if(h(t)){p=t[r](s,q)}return p}a=(function(){var q="createElementNS",p=null;if(h(j)){if(d(j[q])){p=c}}return p}());function b(r,s){var q="createTextNode",p=null;if(h(r)){p=r[q](s)}return p}i=(function(){var q="createTextNode",p=null;if(h(j)){if(d(j[q])){p=b}}return p}());function l(s,r,t){var q="createProcessingInstruction",p=null;if(h(s)){p=s[q](r,t)}return p}m=(function(){var q="createProcessingInstruction",p=null;if(h(j)){if(d(j[q])){p=l}}return p}());function f(r,s){var q="createComment",p=null;if(h(r)){p=r[q](s)}return p}g=(function(){var q="createComment",p=null;if(h(j)){if(d(j[q])){p=f}}return p}());function k(r){var q="createDocumentFragment",p=null;if(h(r)){p=r[q]()}return p}o=(function(){var q="createDocumentFragment",p=null;if(h(j)){if(d(j[q])){p=k}}return p}());j=null;Utils.create=Utils.create||{element:e,elementNS:a,text:i,processingInstruction:m,comment:g,documentFragment:o}}())};