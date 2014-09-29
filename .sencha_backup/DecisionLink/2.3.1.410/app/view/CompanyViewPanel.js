/*
 * File: app/view/CompanyViewPanel.js
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

Ext.define('DecisionLink.view.CompanyViewPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.companyviewpanel',

    requires: [
        'Ext.field.Checkbox'
    ],

    config: {
        items: [
            {
                xtype: 'checkboxfield',
                hidden: false,
                itemId: 'companyInfoCheckBox',
                clearIcon: false,
                label: 'Company Info',
                labelWidth: '100%'
            },
            {
                xtype: 'checkboxfield',
                itemId: 'valuePropCheckBox',
                label: 'Value Propositions',
                labelWidth: '100%'
            },
            {
                xtype: 'checkboxfield',
                itemId: 'competitiveCheckBox',
                label: 'Competitive Performance',
                labelWidth: '100%',
                labelWrap: true
            },
            {
                xtype: 'checkboxfield',
                itemId: 'dnbInfoCheckBox',
                label: 'D&B Additional Info',
                labelWidth: '100%',
                labelWrap: true
            }
        ]
    }

});