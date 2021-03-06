/*
 * File: app/controller/Renames.js
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

Ext.define('DecisionLink.controller.Renames', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            navBar: '#navBar'
        },

        control: {
            "dnbcarousel #employeesPanel": {
                activate: 'onEmployeesPanelActivate'
            },
            "opportunitycarousel #opportunitySituationPanel": {
                activate: 'onSituationPanelActivate'
            },
            "dnbcarousel #competitorsPanel": {
                activate: 'onCompetitorsPanelActivate'
            },
            "dnbcarousel #divisionsPanel": {
                activate: 'onDivisionsPanelActivate'
            },
            "opportunitycarousel #opportunityAssetsPanel": {
                activate: 'onAssetsPanelActivate'
            },
            "opportunitycarousel #opportunityQuotePanel": {
                activate: 'onQuotePanelActivate',
                deactivate: 'onQuotePanelDeactivate'
            },
            "opportunitycarousel #opportunityFormulaPanel": {
                activate: 'onFormulaPanelActivate'
            },
            "opportunitycarousel #opportunitySalesQPanel": {
                activate: 'onSalesQPanelActivate'
            },
            "opportunitycarousel #opportunityOverview": {
                activate: 'onOverviewPanelActivate'
            },
            "dnbcarousel #overviewPanel": {
                activate: 'onDNBPanelActivate'
            },
            "opportunitycarousel #opportunityOverviewPanel": {
                activate: 'onOpptyPanelActivate'
            },
            "competitivecarousel #kpiListPanel": {
                activate: 'onKPIPanelActivate'
            },
            "competitivecarousel #peerPerformancePanel": {
                activate: 'onPeerPerformancePanelActivate'
            },
            "competitivecarousel #closestPeersPanel": {
                activate: 'onClosestPeersPanelActivate'
            },
            "opportunitycostdetailpanel": {
                activate: 'onOpptyCostPanelActivate',
                deactivate: 'onOpptyCostPanelDeactivate'
            },
            "companyscenariospanel": {
                activate: 'onCompanyScenariosPanelActivate',
                deactivate: 'onCompanyScenariosPanelDeactivate'
            },
            "panel": {
                activate: 'onVPPanelActivate'
            }
        }
    },

    onEmployeesPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('Employees');
    },

    onSituationPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('Situation');
    },

    onCompetitorsPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('Competitors');
    },

    onDivisionsPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('Divisions / Locations');
    },

    onAssetsPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('Assets');
    },

    onQuotePanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        button = navBar.rightBox.query('button')[0];
        if (!button) {
            navBar.add({
                xtype:'button',
                text: 'New',
                align: 'right',
                itemId: 'newCostButton'
            });
        }
        navBar.titleComponent.setTitle('Quotes / Costs');
    },

    onFormulaPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('Value Formulas');
    },

    onSalesQPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('Sales Questions');
    },

    onOverviewPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('Overview');
    },

    onDNBPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('Additional DnB Info');
    },

    onOpptyPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('Overview');
    },

    onKPIPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('Key Performance Indicators');
    },

    onPeerPerformancePanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('Peer Performance');
    },

    onClosestPeersPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('8 Closest Peers');
    },

    onOpptyCostPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.titleComponent.setTitle('Cost Details');

        navBar.rightBox.query('button')[0].destroy();
        navBar.add({
                xtype:'button',
                text: 'Delete',
                align: 'right',
                itemId: 'deleteCostButton'
        });
    },

    onQuotePanelDeactivate: function(oldActiveItem, container, newActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.rightBox.query('button')[0].destroy();
    },

    onOpptyCostPanelDeactivate: function(oldActiveItem, container, newActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.rightBox.query('button')[0].destroy();
        navBar.add({
                xtype:'button',
                text: 'New',
                align: 'right',
                itemId: 'newCostButton'
        });
    },

    onCompanyScenariosPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.add({
            xtype: 'button',
            text: 'New',
            align: 'right',
            itemId: 'newVPButton'
        });
    },

    onCompanyScenariosPanelDeactivate: function(oldActiveItem, container, newActiveItem, eOpts) {
        var navBar = this.getNavBar();
        navBar.rightBox.query('button')[0].destroy();
    },

    onVPPanelActivate: function(newActiveItem, container, oldActiveItem, eOpts) {

    }

});