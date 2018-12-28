$(function() {
	//页面加载完成之后执行
	pageInit();
});

function pageInit() {
	//创建jqGrid组件
	jQuery("#list2").jqGrid({
		width:1000,
		height:400,
		url: '../data/JSONData', //组件创建完成之后请求数据的url
		datatype: "json", //请求数据返回的类型。可选json,xml,txt
		colNames: ['用户id', '姓名'],
		colModel: [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
			{
				name: 'customerId',
				index: 'CUSTOMER_ID',
				width: 65
			},
			{
				name: 'testName',
				index: 'CUSTOMER_NAME',
				width: 30
			 }
		],
		rowNum: 10, //一页显示多少条（这个参数被传到后台）
		rowList: [10, 20, 30], //可供用户选择一页显示多少条（覆盖rowNum参数）
		pager: '#pager2', //表格页脚的占位符(一般是div)的id
		sortname: 'CUSTOMER_ID', //初始化的时候排序的字段（传递到后台 sidx=sno）
		sortorder: "desc", //排序方式,可选desc,asc
		mtype: "get", //向后台请求数据的ajax的类型。可选post,get
		viewrecords: true, //总记录数
		caption: "客户信息", //表格的标题名字
		altRows: true,
		//cellEdit: true, //单元格可编辑
		//cellsubmit: 'clientArray',
		//cellurl: 'data/JSONData', //不懂
		emptyrecords: "没有记录", //当返回的数据行数为0时显示的信息（viewrecords : true）
		//gridstate:hidden,//定义当前表格的状态：'visible' or 'hidden'
		//hiddengrid:true,//不显示表格数据，只显示标题
		//multiselect: true, //多选
		//treeGrid:true,
		loadComplete: function() {
		// 	$("#list2").jqGrid('setCaption', "setCaption新的");
			//replace icons with FontAwesome icons like above
			var table = this;
			setTimeout(function () {
				updatePagerIcons(table)
			},0);

		},
	});
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	// jQuery("#list2").jqGrid('navGrid', '#pager2', {
	// 	edit: false,
	// 	add: false,
	// 	del: false
	// });
	function updatePagerIcons(table) {
		var replacement =
		{
			'ui-icon-seek-first' : 'ace-icon fa fa-angle-double-left bigger-140',
			'ui-icon-seek-prev' : 'ace-icon fa fa-angle-left bigger-140',
			'ui-icon-seek-next' : 'ace-icon fa fa-angle-right bigger-140',
			'ui-icon-seek-end' : 'ace-icon fa fa-angle-double-right bigger-140'
		};
		$('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function(){
			var icon = $(this);
			var $class = $.trim(icon.attr('class').replace('ui-icon', ''));

			if($class in replacement) icon.attr('class', 'ui-icon '+replacement[$class]);
		})
	}

}