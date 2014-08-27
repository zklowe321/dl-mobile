/*
 * File: app/view/OpportunityCarousel.js
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

Ext.define('DecisionLink.view.OpportunityCarousel', {
    extend: 'Ext.carousel.Carousel',
    alias: 'widget.opportunitycarousel',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.Img',
        'Ext.field.Select',
        'Ext.Spacer',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.Button'
    ],

    config: {
        items: [
            {
                xtype: 'panel',
                itemId: 'opportunityOverviewPanel',
                scrollable: 'vertical',
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'yr1CostsField',
                        label: 'Year 1 Costs',
                        labelWidth: '40%',
                        labelWrap: true,
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'ongoingCostsField',
                        label: 'Ongoing Costs',
                        labelWidth: '40%',
                        labelWrap: true,
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'yr1BenefitsField',
                        label: 'Year 1 Benefits',
                        labelWidth: '40%',
                        labelWrap: true,
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'yr2BenefitsField',
                        label: 'Year 2 Benefits',
                        labelWidth: '40%',
                        labelWrap: true,
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'yr3BenefitsField',
                        label: 'Year 3 Benefits',
                        labelWidth: '40%',
                        labelWrap: true,
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'waccField',
                        label: 'Customer Cost of Capital (%)',
                        labelWidth: '40%',
                        labelWrap: true,
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'termField',
                        label: 'Term (Years)',
                        labelWidth: '40%',
                        labelWrap: true,
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'burField',
                        label: 'Business Unit Revenue (M)',
                        labelWidth: '40%',
                        labelWrap: true,
                        readOnly: true
                    },
                    {
                        xtype: 'container',
                        itemId: 'imageContainer',
                        items: [
                            {
                                xtype: 'label',
                                html: 'Cost Status'
                            },
                            {
                                xtype: 'image',
                                height: 60,
                                itemId: 'costLightImage',
                                margin: 10,
                                width: 60,
                                src: 'http://beta.decisionlink.com/images/logo.png'
                            },
                            {
                                xtype: 'label',
                                html: 'Benefit Status'
                            },
                            {
                                xtype: 'image',
                                height: 60,
                                itemId: 'benefitLightImage',
                                margin: 10,
                                width: 60,
                                src: 'http://beta.decisionlink.com/images/logo.png'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                itemId: 'opportunitySituationPanel',
                scrollable: 'vertical',
                items: [
                    {
                        xtype: 'selectfield',
                        itemId: 'customerTypeField',
                        label: 'Customer Type',
                        labelWidth: '40%',
                        labelWrap: true,
                        options: [
                            {
                                text: 'Net New Customer',
                                value: 1
                            },
                            {
                                text: 'Install Base',
                                value: 2
                            },
                            {
                                text: 'Competitive Install',
                                value: 3
                            },
                            {
                                text: 'Upgrade or Renew',
                                value: 4
                            }
                        ]
                    },
                    {
                        xtype: 'spacer',
                        height: 10
                    },
                    {
                        xtype: 'textfield',
                        label: 'Competing Against',
                        labelWidth: '100%',
                        readOnly: true
                    },
                    {
                        xtype: 'list',
                        height: 100,
                        itemId: 'competitorsList',
                        itemTpl: [
                            '<div class=“info” width=“40” height=“40”/>{name}<br/>'
                        ],
                        store: 'ScenarioCompetitorsStore'
                    },
                    {
                        xtype: 'spacer',
                        height: 10
                    },
                    {
                        xtype: 'textfield',
                        label: 'Industries',
                        labelWidth: '100%',
                        readOnly: true
                    },
                    {
                        xtype: 'list',
                        height: 100,
                        itemId: 'industriesList',
                        itemTpl: [
                            '<div class=“info” width=“40” height=“40”/>{name}<br/>'
                        ],
                        store: 'ScenarioIndustriesStore'
                    },
                    {
                        xtype: 'spacer',
                        height: 10
                    },
                    {
                        xtype: 'selectfield',
                        itemId: 'sellingIntoField',
                        label: 'Selling Into',
                        labelWidth: '40%',
                        labelWrap: true,
                        displayField: 'name',
                        store: 'ScenarioAreasStore',
                        valueField: 'id'
                    },
                    {
                        xtype: 'spacer',
                        height: 10
                    },
                    {
                        xtype: 'selectfield',
                        itemId: 'baselinesField',
                        label: 'Baselines',
                        labelWidth: '40%',
                        displayField: 'name',
                        store: 'ScenarioBaselinesStore',
                        valueField: 'id'
                    },
                    {
                        xtype: 'spacer',
                        height: 10
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'costOfCapitalField',
                        label: 'Cost of Capital %',
                        labelWidth: '40%',
                        labelWrap: true
                    },
                    {
                        xtype: 'spacer',
                        height: 10
                    },
                    {
                        xtype: 'selectfield',
                        itemId: 'termField',
                        label: 'Term',
                        labelWidth: '40%',
                        options: [
                            {
                                text: '1 Year',
                                value: 1
                            },
                            {
                                text: '3 Years',
                                value: 3
                            },
                            {
                                text: '5 Years',
                                value: 5
                            }
                        ]
                    },
                    {
                        xtype: 'spacer',
                        height: 10
                    },
                    {
                        xtype: 'button',
                        centered: false,
                        itemId: 'saveSituationButton',
                        margin: 10,
                        text: 'Save Situation'
                    },
                    {
                        xtype: 'dataview',
                        hidden: true,
                        itemId: 'scenarioField',
                        itemTpl: [
                            '<div>Data View Item {string}</div>'
                        ],
                        store: 'ScenarioStore'
                    }
                ]
            },
            {
                xtype: 'panel',
                itemId: 'opportunitySalesQPanel',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'container',
                        flex: 3,
                        height: '50%',
                        itemId: 'sqqContainer',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'list',
                                itemId: 'salesQuestionsList',
                                itemTpl: [
                                    '<div class=“info” width=“40” height=“40”/>{name}<br/>'
                                ],
                                store: 'SalesQuestionsStore'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        flex: 3,
                        height: '50%',
                        itemId: 'secondarySQQContainer',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'list',
                                itemId: 'secondarySQQList',
                                itemTpl: [
                                    '<div class=“info” width=“40” height=“40”/>{name}<br/>'
                                ],
                                store: 'SecondarySQQStore'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                itemId: 'opportunityFormulaPanel',
                layout: 'fit',
                items: [
                    {
                        xtype: 'list',
                        itemId: 'valueFormulasList',
                        itemTpl: [
                            '<div class=“info” width=“40” height=“40”/>{metric}<br/>'
                        ],
                        store: 'ValueFormulasStore'
                    }
                ]
            },
            {
                xtype: 'panel',
                itemId: 'opportunityQuotePanel',
                layout: 'fit',
                items: [
                    {
                        xtype: 'list',
                        itemId: 'opportunityCostsList',
                        itemTpl: [
                            '<div class=“info” width=“40” height=“40”/>{name}<br/><small>Cost: ${cost}</small>'
                        ],
                        store: 'OpportunityCostsStore'
                    }
                ]
            },
            {
                xtype: 'panel',
                itemId: 'opportunityAssetsPanel',
                layout: 'fit',
                items: [
                    {
                        xtype: 'list',
                        itemId: 'opportunityAssetsList',
                        itemTpl: [
                            '<div class=“info” width=“40” height=“40”/>{name}<img src={icon} align="right"/>'
                        ],
                        store: 'AssetsStore'
                    }
                ]
            }
        ]
    }

});