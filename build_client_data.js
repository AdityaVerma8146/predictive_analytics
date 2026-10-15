const fs = require('fs');
const path = require('path');
const { units } = require('./server/data/units');

const clientData = `/**
 * Predictive Analytics Multi-Unit Client-Side Dataset
 * Developed by Aditya Verma
 * Supports Unit-1, Unit-2 (100 MCQs each), and Unit-3 (Coming Soon).
 * Enables 100% offline, zero-latency, and static deployment support.
 */

window.PREDICTIVE_ANALYTICS_DATA = {
  activeUnit: 'unit1',
  units: {
    unit1: {
      id: ${JSON.stringify(units.unit1.id)},
      number: ${units.unit1.number},
      title: ${JSON.stringify(units.unit1.title)},
      shortTitle: ${JSON.stringify(units.unit1.shortTitle)},
      subtitle: ${JSON.stringify(units.unit1.subtitle)},
      description: ${JSON.stringify(units.unit1.description)},
      badge: ${JSON.stringify(units.unit1.badge)},
      status: ${JSON.stringify(units.unit1.status)},
      sections: ${JSON.stringify(units.unit1.sections, null, 2)},
      questions: ${JSON.stringify(units.unit1.questions, null, 2)},
      revisionSheet: []
    },
    unit2: {
      id: ${JSON.stringify(units.unit2.id)},
      number: ${units.unit2.number},
      title: ${JSON.stringify(units.unit2.title)},
      shortTitle: ${JSON.stringify(units.unit2.shortTitle)},
      subtitle: ${JSON.stringify(units.unit2.subtitle)},
      description: ${JSON.stringify(units.unit2.description)},
      badge: ${JSON.stringify(units.unit2.badge)},
      status: ${JSON.stringify(units.unit2.status)},
      sections: ${JSON.stringify(units.unit2.sections, null, 2)},
      questions: ${JSON.stringify(units.unit2.questions, null, 2)},
      revisionSheet: ${JSON.stringify(units.unit2.revisionSheet, null, 2)}
    },
    unit3: {
      id: ${JSON.stringify(units.unit3.id)},
      number: ${units.unit3.number},
      title: ${JSON.stringify(units.unit3.title)},
      shortTitle: ${JSON.stringify(units.unit3.shortTitle)},
      subtitle: ${JSON.stringify(units.unit3.subtitle)},
      description: ${JSON.stringify(units.unit3.description)},
      badge: ${JSON.stringify(units.unit3.badge)},
      status: ${JSON.stringify(units.unit3.status)},
      sections: [],
      questions: [],
      revisionSheet: []
    }
  },

  // Helper method to switch active unit
  setUnit: function(unitId) {
    const key = (unitId === 'unit2' || unitId === '2') ? 'unit2' : ((unitId === 'unit3' || unitId === '3') ? 'unit3' : 'unit1');
    if (this.units[key]) {
      this.activeUnit = key;
    }
    return this.getUnitData();
  },

  // Helper method to retrieve current unit bundle
  getUnitData: function(unitId) {
    const key = unitId ? ((unitId === 'unit2' || unitId === '2') ? 'unit2' : ((unitId === 'unit3' || unitId === '3') ? 'unit3' : 'unit1')) : this.activeUnit;
    return this.units[key] || this.units.unit1;
  }
};

// Backward-compatibility getters so existing references to .sections and .questions work seamlessly
Object.defineProperty(window.PREDICTIVE_ANALYTICS_DATA, 'sections', {
  get: function() {
    return this.units[this.activeUnit].sections;
  },
  set: function(val) {
    this.units[this.activeUnit].sections = val;
  }
});

Object.defineProperty(window.PREDICTIVE_ANALYTICS_DATA, 'questions', {
  get: function() {
    return this.units[this.activeUnit].questions;
  },
  set: function(val) {
    this.units[this.activeUnit].questions = val;
  }
});
`;

fs.writeFileSync(path.join(__dirname, 'public', 'js', 'questions-data.js'), clientData, 'utf8');
console.log('✅ Successfully created public/js/questions-data.js with multi-unit data!');
