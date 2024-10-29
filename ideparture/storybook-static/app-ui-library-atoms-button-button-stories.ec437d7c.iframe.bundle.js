(self.webpackChunkideparture=self.webpackChunkideparture||[]).push([[730],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/ui-library/atoms/button/button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonIcon:()=>ButtonIcon,Filled:()=>Filled,Large:()=>Large,Outline:()=>Outline,Small:()=>Small,TextIcon:()=>TextIcon,TextOnly:()=>TextOnly,__namedExportsOrder:()=>__namedExportsOrder,default:()=>button_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./src/app/ui-library/atoms/button/button.component.css?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let ButtonComponent=class ButtonComponent{buttonClick=new core.EventEmitter;text="";icon=!1;styleType="text-only";backgroundColor=null;size="medium";get buttonClasses(){switch(this.styleType){case"text-only":return"w-full text-left text-accent-500 bg-transparent hover:text-accent-300";case"filled":return"w-full flex items-center justify-center bg-secondary-600 hover:bg-secondary-500 text-white font-bold py-3 px-6 rounded transition-all";case"outline":return"border border-secondary-600 flex items-center justify-center hover:bg-secondary-500 text-secondary-600 font-medium py-1 px-6 rounded transition-all";case"text-icon":return"w-full text-left text-accent-600 bg-transparent hover:text-accent-300 inline-flex";case"button-icon":return"flex items-center justify-center bg-secondary-600 hover:bg-secondary-500 text-white font-bold py-1 px-6 rounded transition-all";default:return""}}static propDecorators={buttonClick:[{type:core.Output}],text:[{type:core.Input}],icon:[{type:core.Input}],styleType:[{type:core.Input}],backgroundColor:[{type:core.Input}],size:[{type:core.Input}]}};ButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-button",standalone:!0,imports:[common.CommonModule],template:'\x3c!-- BUTTON [HTML] iDeparture Design System v.3.0.1 --\x3e\n<button [ngClass]="buttonClasses" (click)="buttonClick.emit()" [attr.aria-label]="text || \'Button\'">\n  \x3c!-- Text (conditionally displayed) --\x3e\n  <span *ngIf="text">{{ text }}</span>\n\n  \x3c!-- Icon (conditionally displayed) --\x3e\n  <ng-container *ngIf="styleType === \'text-icon\' || styleType === \'button-icon\'">\n    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 ms-1 mt-1">\n      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />\n    </svg>     \n  </ng-container>\n</button>\n',styles:[button_componentngResource_default()]})],ButtonComponent);const button_stories={title:"Atoms/Button",component:ButtonComponent,tags:["autodocs"],argTypes:{styleType:{control:{type:"select"},options:["text-only","text-icon","filled","outline","button-icon"],description:"Defines the button style (text-only, text-icon, filled, outline, or button-icon)"},text:{control:{type:"text"},description:"Button text"},backgroundColor:{control:"color",description:"Optional background color for the button"},size:{control:{type:"select"},options:["small","medium","large"],description:"Button size (small, medium, or large)"},buttonClick:{action:"clicked"}},args:{text:"Button",styleType:"text-only",backgroundColor:"transparent"}},TextOnly={args:{text:"Sign Up Here!",styleType:"text-only"}},TextIcon={args:{text:"Save",styleType:"text-icon"}},Filled={args:{text:"Submit",styleType:"filled",backgroundColor:"#1B2E40"}},Outline={args:{text:"Cancel",styleType:"outline",backgroundColor:"transparent"}},ButtonIcon={args:{text:"Next",styleType:"button-icon"}},Large={args:{text:"Large Button",size:"large",styleType:"filled"}},Small={args:{text:"Small Button",size:"small",styleType:"text-only"}},__namedExportsOrder=["TextOnly","TextIcon","Filled","Outline","ButtonIcon","Large","Small"];TextOnly.parameters={...TextOnly.parameters,docs:{...TextOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Sign Up Here!',\n    styleType: 'text-only'\n  }\n}",...TextOnly.parameters?.docs?.source}}},TextIcon.parameters={...TextIcon.parameters,docs:{...TextIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Save',\n    styleType: 'text-icon'\n  }\n}",...TextIcon.parameters?.docs?.source}}},Filled.parameters={...Filled.parameters,docs:{...Filled.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Submit',\n    styleType: 'filled',\n    backgroundColor: '#1B2E40' // Primary color\n  }\n}",...Filled.parameters?.docs?.source}}},Outline.parameters={...Outline.parameters,docs:{...Outline.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Cancel',\n    styleType: 'outline',\n    backgroundColor: 'transparent'\n  }\n}",...Outline.parameters?.docs?.source}}},ButtonIcon.parameters={...ButtonIcon.parameters,docs:{...ButtonIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Next',\n    styleType: 'button-icon'\n  }\n}",...ButtonIcon.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Large Button',\n    size: 'large',\n    styleType: 'filled'\n  }\n}",...Large.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'Small Button',\n    size: 'small',\n    styleType: 'text-only'\n  }\n}",...Small.parameters?.docs?.source}}}},"./src/app/ui-library/atoms/button/button.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);