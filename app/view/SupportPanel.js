/*
 * File: app/view/SupportPanel.js
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

Ext.define('DecisionLink.view.SupportPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.supportpanel',

    requires: [
        'Ext.field.Select',
        'Ext.Spacer',
        'Ext.field.Email',
        'Ext.field.TextArea',
        'Ext.Button'
    ],

    config: {
        navView: 'supportpanel',
        scrollable: 'vertical',
        items: [
            {
                xtype: 'selectfield',
                itemId: 'prioritySelectField',
                label: 'Priority',
                labelWidth: '40%',
                labelWrap: true,
                options: [
                    {
                        text: '-None-',
                        value: 0
                    },
                    {
                        text: 'High',
                        value: 1
                    },
                    {
                        text: 'Medium',
                        value: 2
                    },
                    {
                        text: 'Low',
                        value: 3
                    }
                ]
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'selectfield',
                itemId: 'typeSelectField',
                label: 'Type',
                labelWidth: '40%',
                labelWrap: true,
                options: [
                    {
                        text: '-None-',
                        value: 0
                    },
                    {
                        text: 'Problem',
                        value: 1
                    },
                    {
                        text: 'Feature Request',
                        value: 2
                    },
                    {
                        text: 'Question',
                        value: 3
                    }
                ]
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'textfield',
                itemId: 'subjectField',
                label: 'Subject',
                labelWidth: '40%',
                labelWrap: true
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'textfield',
                itemId: 'reportedByField',
                label: 'Reported  By',
                labelAlign: 'top',
                labelWrap: true
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'emailfield',
                itemId: 'emailField',
                label: 'Email',
                labelWidth: '40%',
                labelWrap: true,
                placeHolder: 'email@example.com'
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'textareafield',
                label: 'Description',
                labelAlign: 'top',
                labelWrap: true
            },
            {
                xtype: 'spacer',
                height: 10
            },
            {
                xtype: 'button',
                itemId: 'submitButton',
                margin: 10,
                text: 'Submit'
            }
        ]
    }

});