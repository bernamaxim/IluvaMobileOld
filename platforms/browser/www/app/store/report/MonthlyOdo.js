Ext.define('IluvatrackApp.store.report.MonthlyOdo', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'ReportStoreMonthlyOdo',
        model: "IluvatrackApp.model.report.MonthlyOdo",
        proxy: {
            type: 'ajax',
            url: IluvatrackApp.util.Config.getBaseUrl() + '/report/monthlyodo',
            actionMethods: 'post',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }
    }
});

