(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-779e1712"],{"7bd6":function(e,t,r){"use strict";r("ba4c")},ba4c:function(e,t,r){},cc5e:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return s})),r.d(t,"e",(function(){return o})),r.d(t,"b",(function(){return i}));var a=r("b775");function n(){return Object(a["a"])({url:"/vue-element-admin/routes",method:"get"})}function l(){return Object(a["a"])({url:"/vue-element-admin/roles",method:"get"})}function s(e){return Object(a["a"])({url:"/vue-element-admin/role",method:"post",data:e})}function o(e,t){return Object(a["a"])({url:"/vue-element-admin/role/".concat(e),method:"put",data:t})}function i(e){return Object(a["a"])({url:"/vue-element-admin/role/".concat(e),method:"delete"})}},d86b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticStyle:{padding:"10px"}},[r("el-card",[r("div",{staticStyle:{padding:"15px","text-align":"center"}},[r("el-form",{ref:"riskFactoryCheckApplyVo",staticClass:"form1",staticStyle:{"text-align":"center"},attrs:{model:e.riskFactoryCheckApplyVo,rules:e.ruleValidate,"label-width":"160px"}},[r("el-row",[r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"归属部门",prop:"companyAddress"}},[r("el-select",{attrs:{type:"text"},model:{value:e.riskFactoryCheckApplyVo.companyAddress,callback:function(t){e.$set(e.riskFactoryCheckApplyVo,"companyAddress",t)},expression:"riskFactoryCheckApplyVo.companyAddress"}},[r("el-option",{attrs:{value:"A",label:"金融信息科技一部"}})],1)],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"归属团队",prop:"companyAddress"}},[r("el-select",{attrs:{type:"text"},model:{value:e.riskFactoryCheckApplyVo.companyAddress,callback:function(t){e.$set(e.riskFactoryCheckApplyVo,"companyAddress",t)},expression:"riskFactoryCheckApplyVo.companyAddress"}},[r("el-option",{attrs:{value:"A",label:"归属团队1"}}),r("el-option",{attrs:{value:"B",label:"归属团队2"}})],1)],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"归属项目",prop:"companyAddress"}},[r("el-select",{attrs:{type:"text"},model:{value:e.riskFactoryCheckApplyVo.companyAddress,callback:function(t){e.$set(e.riskFactoryCheckApplyVo,"companyAddress",t)},expression:"riskFactoryCheckApplyVo.companyAddress"}},[r("el-option",{attrs:{value:"A",label:"归属项目1"}}),r("el-option",{attrs:{value:"B",label:"归属项目2"}})],1)],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"申请类型",prop:"companyAddress"}},[r("el-select",{attrs:{type:"text"},model:{value:e.riskFactoryCheckApplyVo.companyAddress,callback:function(t){e.$set(e.riskFactoryCheckApplyVo,"companyAddress",t)},expression:"riskFactoryCheckApplyVo.companyAddress"}},[r("el-option",{attrs:{value:"A",label:"变卖"}}),r("el-option",{attrs:{value:"B",label:"续费"}}),r("el-option",{attrs:{value:"C",label:"弃置"}})],1)],1)],1),r("el-col",{attrs:{span:8}},[r("el-form-item",{attrs:{label:"资产总金额",prop:"linkName"}},[r("el-input",{attrs:{type:"text"},model:{value:e.riskFactoryCheckApplyVo.linkName,callback:function(t){e.$set(e.riskFactoryCheckApplyVo,"linkName",t)},expression:"riskFactoryCheckApplyVo.linkName"}})],1)],1)],1),r("div",{staticStyle:{padding:"15px","text-align":"right"}},[r("el-button",{staticStyle:{"text-align":"right"},attrs:{type:"primary",round:""},on:{click:e.handleBuyAddRole}},[e._v("增加处理信息")]),r("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[r("el-table-column",{attrs:{type:"selection",width:"56",fixed:""}}),r("el-table-column",{attrs:{align:"center",label:"资产编号",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.key)+" ")]}}])}),r("el-table-column",{attrs:{align:"header-center",label:"资产性质"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description)+" ")]}}])}),r("el-table-column",{attrs:{align:"header-center",label:"资产种类"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description_a)+" ")]}}])}),r("el-table-column",{attrs:{align:"header-center",label:"资产备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description_c)+" ")]}}])}),r("el-table-column",{attrs:{align:"header-center",label:"资产金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" 200 ")]}}])}),r("el-table-column",{attrs:{align:"center",label:"操作",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small",round:""},on:{click:function(r){return e.handleBuyEdit(t)}}},[e._v("修改")]),r("el-button",{attrs:{type:"danger",size:"small",round:""},on:{click:function(r){return e.handleBuyDelete(t)}}},[e._v("删除")])]}}])})],1)],1)],1),r("br"),r("br"),r("br"),r("el-button",{attrs:{type:"primary",round:""}},[e._v("保存")]),e._v(" "),r("el-button",{attrs:{type:"primary",round:""}},[e._v("提交")])],1)])],1),r("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"Edit Role":"New Role"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"Name"}},[r("el-input",{attrs:{placeholder:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),r("el-form-item",{attrs:{label:"Desc"}},[r("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Role Description"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),r("el-form-item",{attrs:{label:"Menus"}},[r("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")]),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("Confirm")])],1)],1),r("el-dialog",{attrs:{visible:e.dialogAssetBuy,title:(e.dialogType,"资产处理申请")},on:{"update:visible":function(t){e.dialogAssetBuy=t}}},[r("el-form",{attrs:{model:e.assetBuy,rules:e.ruleValidateAssetBuy,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"资产性质",prop:"name"}},[r("el-select",{attrs:{type:"text",placeholder:"请选择",clearable:""},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}},e._l(e.industryInfoList,(function(e,t){return r("el-option",{key:t,attrs:{value:e.key,label:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"资产种类",prop:"name"}},[r("el-select",{attrs:{type:"text",placeholder:"请选择",clearable:""},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}},e._l(e.assetSortList,(function(e,t){return r("el-option",{key:t,attrs:{value:e.key,label:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"资产备注",prop:"name"}},[r("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"请输入内容..."},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}})],1),r("el-form-item",{attrs:{label:"资产编号",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入内容..."},model:{value:e.assetBuy.name,callback:function(t){e.$set(e.assetBuy,"name",t)},expression:"assetBuy.name"}})],1)],1),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogAssetBuy=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmBuyRole}},[e._v("确定")])],1)],1)],1)},n=[],l=(r("a4d3"),r("e01a"),r("99af"),r("4de4"),r("4160"),r("caad"),r("a434"),r("b0c0"),r("2532"),r("159b"),r("5530")),s=r("2909"),o=r("b85c"),i=(r("96cf"),r("1da1")),c=r("df7c"),u=r.n(c),d=r("ed08"),p=r("cc5e"),y=r("c677"),m={key:"",name:"",description:"",routes:[]},h={components:{ElCard:y["a"]},data:function(){return{role:Object.assign({},m),routes:[],rolesList:[],dialogVisible:!1,dialogAssetBuy:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"},industryInfoList:[{value:"消耗品",key:"A"},{value:"非消耗品定向",key:"B"},{value:"非消耗品非定向",key:"C"}],assetSortList:[{value:"电脑",key:"A"},{value:"笔记本",key:"B"},{value:"卫生纸",key:"C"},{value:"桌子",key:"D"},{value:"椅子",key:"E"},{value:"夹子",key:"F"}],riskFactoryCheckApplyVo:{companyName:"",registrationNumber:"",companyAddress:"",industryInfo:"",expectedServiceDate:"",linkName:"",linkNumber:"",withSpecialRequire:"",pointx2000:"",pointy2000:"",addressDetail:"",addressProvince:"",addressCity:"",addressCounty:"",addressProvinceCode:"",addressCityCode:"",addressCountyCode:"",addressCode:""},assetBuy:{name:""},ruleValidate:{companyAddress:[{required:!0,message:"不能为空"}],linkName:[{required:!0,message:"不能为空"}]},ruleValidateAssetBuy:{name:[{required:!0,message:"不能为空"}]}}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoutes(),this.getRoles()},methods:{getRoutes:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["d"])();case 2:r=t.sent,e.serviceRoutes=r.data,e.routes=e.generateRoutes(r.data);case 5:case"end":return t.stop()}}),t)})))()},getRoles:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["c"])();case 2:r=t.sent,e.rolesList=r.data;case 4:case"end":return t.stop()}}),t)})))()},generateRoutes:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",a=[],n=Object(o["a"])(e);try{for(n.s();!(t=n.n()).done;){var l=t.value;if(!l.hidden){var s=this.onlyOneShowingChild(l.children,l);l.children&&s&&!l.alwaysShow&&(l=s);var i={path:u.a.resolve(r,l.path),title:l.meta&&l.meta.title};l.children&&(i.children=this.generateRoutes(l.children,i.path)),a.push(i)}}}catch(c){n.e(c)}finally{n.f()}return a},generateArr:function(e){var t=this,r=[];return e.forEach((function(e){if(r.push(e),e.children){var a=t.generateArr(e.children);a.length>0&&(r=[].concat(Object(s["a"])(r),Object(s["a"])(a)))}})),r},handleAddRole:function(){this.role=Object.assign({},m),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.dialogVisible=!0},handleBuyAddRole:function(){this.dialogType="new",this.dialogAssetBuy=!0},handleBuyEdit:function(e){this.dialogType="edit",this.dialogAssetBuy=!0},handleBuyDelete:function(e){var t=this,r=e.$index,a=e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["b"])(a.key);case 2:t.rolesList.splice(r,1),t.$message({type:"success",message:"Delete succed!"});case 4:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e)}))},handleEdit:function(e){var t=this;this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=Object(d["c"])(e.row),this.$nextTick((function(){var e=t.generateRoutes(t.role.routes);t.$refs.tree.setCheckedNodes(t.generateArr(e)),t.checkStrictly=!1}))},handleDelete:function(e){var t=this,r=e.$index,a=e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["b"])(a.key);case 2:t.rolesList.splice(r,1),t.$message({type:"success",message:"Delete succed!"});case 4:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e)}))},generateTree:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",a=arguments.length>2?arguments[2]:void 0,n=[],l=Object(o["a"])(e);try{for(l.s();!(t=l.n()).done;){var s=t.value,i=u.a.resolve(r,s.path);s.children&&(s.children=this.generateTree(s.children,i,a)),(a.includes(i)||s.children&&s.children.length>=1)&&n.push(s)}}catch(c){l.e(c)}finally{l.f()}return n},confirmRole:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,a,n,l,s,o,i,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r="edit"===e.dialogType,a=e.$refs.tree.getCheckedKeys(),e.role.routes=e.generateTree(Object(d["c"])(e.serviceRoutes),"/",a),!r){t.next=16;break}return t.next=6,Object(p["e"])(e.role.key,e.role);case 6:n=0;case 7:if(!(n<e.rolesList.length)){t.next=14;break}if(e.rolesList[n].key!==e.role.key){t.next=11;break}return e.rolesList.splice(n,1,Object.assign({},e.role)),t.abrupt("break",14);case 11:n++,t.next=7;break;case 14:t.next=22;break;case 16:return t.next=18,Object(p["a"])(e.role);case 18:l=t.sent,s=l.data,e.role.key=s.key,e.rolesList.push(e.role);case 22:o=e.role,i=o.description,c=o.key,u=o.name,e.dialogVisible=!1,e.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"\n            <div>Role Key: ".concat(c,"</div>\n            <div>Role Name: ").concat(u,"</div>\n            <div>Description: ").concat(i,"</div>\n          "),type:"success"});case 25:case"end":return t.stop()}}),t)})))()},confirmBuyRole:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.dialogAssetBuy=!1;case 1:case"end":return t.stop()}}),t)})))()},onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=null,a=e.filter((function(e){return!e.hidden}));return 1===a.length?(r=a[0],r.path=u.a.resolve(t.path,r.path),r):0===a.length&&(r=Object(l["a"])(Object(l["a"])({},t),{},{path:"",noShowingChildren:!0}),r)}}},f=h,b=(r("7bd6"),r("2877")),k=Object(b["a"])(f,a,n,!1,null,"171624cb",null);t["default"]=k.exports}}]);