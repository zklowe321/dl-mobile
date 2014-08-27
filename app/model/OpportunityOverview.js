/*
 * File: app/model/OpportunityOverview.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('DecisionLink.model.OpportunityOverview', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'user_name'
            },
            {
                name: 'account_name'
            },
            {
                name: 'account_id'
            },
            {
                name: 'yr1_cost_sum'
            },
            {
                name: 'yrx_cost_sum'
            },
            {
                name: 'yr1_benefit_sum'
            },
            {
                name: 'yr2_benefit_sum'
            },
            {
                name: 'yr3_benefit_sum'
            },
            {
                name: 'wacc'
            },
            {
                name: 'term'
            },
            {
                name: 'benefit_light_image'
            },
            {
                name: 'cost_light_image'
            },
            {
                name: 'name'
            },
            {
                name: 'oppty_revenue'
            }
        ]
    }
});