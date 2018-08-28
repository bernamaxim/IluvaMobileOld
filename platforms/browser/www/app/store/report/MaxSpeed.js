/**
 * Created by Ahmad Suhendri on 1/8/14.
 */
/**
 * Created by Ahmad Suhendri on 12/25/13.
 */
Ext.define('IluvatrackApp.store.report.MaxSpeed', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'ReportStoreMaxSpeed',
        model: "IluvatrackApp.model.report.MaxSpeed",
        proxy : {
            type   : 'ajax',
            url    : IluvatrackApp.util.Config.getBaseUrl()+'/report/maxspeed',
            actionMethods: 'post',
            reader : {
                type         : 'json',
                rootProperty : 'data'
            }
        }
    }
});

