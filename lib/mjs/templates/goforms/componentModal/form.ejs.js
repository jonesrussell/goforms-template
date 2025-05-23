export default function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="formio-component-modal-wrapper formio-component-modal-wrapper-' +
((__t = ( ctx.component.type )) == null ? '' : __t) +
'" ref="componentModalWrapper">\n  <div ref="openModalWrapper"></div>\n  <div class="formio-dialog formio-dialog-theme-default component-rendering-hidden" ref="modalWrapper">\n    <div class="formio-dialog-overlay" ref="modalOverlay"></div>\n    <div class="formio-dialog-content" aria-labelledby="ml-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'" ';
 if (!ctx.self.isIE()) { ;
__p += ' role="dialog" ';
 } ;
__p += ' ref="modalContents">\n      <label class="visually-hidden" id="ml-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'' +
((__t = (ctx.self.isIE() ? ', dialog' : '')) == null ? '' : __t) +
'</label>\n      ';
 if (ctx.options.vpat) { ;
__p += '\n      <button class="formio-dialog-close float-end" title="Close" aria-label="' +
((__t = (ctx.t('closeBtnDescription'))) == null ? '' : __t) +
'" ref="modalCloseButton"></button>\n      ';
 } else { ;
__p += '\n      <button class="formio-dialog-close float-end btn btn-secondary btn-sm" aria-label="' +
((__t = (ctx.t('closeBtnDescription'))) == null ? '' : __t) +
'" ref="modalClose"></button>\n      ';
 } ;
__p += '\n      <div ref="modalContent">\n        ';
 if (ctx.visible) { ;
__p += '\n        <div ref="componentContent">' +
((__t = (ctx.children)) == null ? '' : __t) +
'</div>\n        ';
 } ;
__p += '\n        <div class="formio-dialog-buttons">\n          ';
 if (ctx.options.vpat) { ;
__p += '\n          <button class="btn btn-secondary formio-dialog-button" aria-label="' +
((__t = (ctx.t('cancelBtnDescription'))) == null ? '' : __t) +
'" ref="modalClose">' +
((__t = (ctx.t('cancel'))) == null ? '' : __t) +
'</button>\n          ';
 } ;
__p += '\n          <button class="btn btn-success formio-dialog-button" ref="modalSave" aria-label="' +
((__t = (ctx.t('saveBtnDescription'))) == null ? '' : __t) +
'">' +
((__t = (ctx.t('save'))) == null ? '' : __t) +
'</button>\n        </div>\n      </div>\n    </div>\n    <span class="visually-hidden" ref="modalLiveRegion" aria-live="assertive"></span>\n  </div>\n</div>\n';
return __p
}