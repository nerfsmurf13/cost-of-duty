<template>
  <div class="stat-container">
    <div class="total-cash">
      <div class="value">$XX,XXX,XXX</div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Kill Streak</th>
          <th>Awarded</th>
          <th>Uses</th>
          <th>Kills/Assists</th>
          <th>Costs</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(killstreak, index) in killstreakObject" :key="index">
          <th>{{ killstreak.properties.name }}</th>
          <th>{{ killstreak.properties.awardedCount }}</th>
          <th>{{ killstreak.properties.uses }}</th>
          <th>{{ killstreak.properties.extraStat1 }}</th>
          <th>
            {{
              formatPrice(
                killstreak.properties.cost * killstreak.properties.uses
              )
            }}
          </th>
        </tr>
        <!-- <tr>
          <th>Hover Jet</th>
          <th>
            {{
              stats.data.lifetime.scorestreakData.lethalScorestreakData
                .hover_jet.properties.awardedCount
            }}
          </th>
          <th>
            {{
              stats.data.lifetime.scorestreakData.lethalScorestreakData
                .hover_jet.properties.uses
            }}
          </th>
          <th>
            {{
              stats.data.lifetime.scorestreakData.lethalScorestreakData
                .hover_jet.properties.extraStat1
            }}
          </th>
          <th>
            ${{
              formatPrice(
                stats.data.lifetime.scorestreakData.lethalScorestreakData
                  .hover_jet.properties.awardedCount *
                  costs.killstreaks.hover_jet.unit_cost
              )
            }}
          </th>
        </tr> -->
        <tr>
          <th>Support Helo</th>
          <th>1</th>
          <th>1</th>
          <th>20</th>
          <th>$40,000,000</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { stateMerge } from "vue-object-merge";

export default {
  name: "Killstreaks",
  props: {
    killstreakObject: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    this.combineObjects;
  },
  data() {
    return {
      metaObject: {
        bradley: {
          properties: {
            name: "Bradley",
            nameFull: "Bradley Full",
            cost: 3166000
          }
		},
		hover_jet: {
          properties: {
            name: "Hover Jet",
            nameFull: "AV-8",
            cost: 1500000
          }
        },
		toma_strike: {
          properties: {
            name: "Tomahawk",
            nameFull: "Tomahawk Land Attack Missile",
            cost: 1400000
          }
        }
      },
      demoObject: {}
    };
  },
  mutations: {
    MERGE_STATE(state, data) {
      stateMerge(state, data);
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  computed: {
    combineObjects() {
      stateMerge(this.killstreakObject, this.metaObject);
    },
    // sortedCost() {
    //   return this.killstreakObject.sort((a, b) => { return b.cost - a.cost;});
    // }
  }
};
</script>

<style lang="scss" scoped>
$bad: #871e1a;
$good: #77b164;
$background1: #000;
$background2: #111;
$selected-lite: #43677b;
$selected-dark: #253c4b;
/* --text-lite: #cccccc; */
$text-lite: #fff;
$text-med: #89ddff;
$text-dark: #3e3e3e;
$hilight: #f0a84b;
$screen-med: 800px;
$screen-large: 1080px;

.stat-container {
  font-size: 1.5rem;
  border: 1px solid $selected-dark;
  display: flex;
  background-color: $background1;
  margin: 1rem 0;
  margin-top: 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0.5rem 0;
  .stat-container-indv {
    background-color: $background2;
    background-image: url("../assets/corners.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 125px;
    margin: 0.5rem;

    .stats-content {
      padding: 0.3rem;
      color: $text-lite;
    }
    .stats-cost {
      padding: 0.3rem;
      border-top: 2px solid $text-dark;
      font-size: 1rem;
      color: $good;
    }
    .stats-title {
      padding: 0.3rem;
      border-top: 2px solid $text-dark;
      font-size: 1rem;
      color: $text-med;
    }
    &:hover {
      background-color: $selected-dark;
      .stats-title {
        border-top: 2px solid $hilight;
        color: $hilight;
      }
      .stats-cost {
        border-top: 2px solid $hilight;
      }
    }
  }
  .title {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  table {
    font-size: 0.75rem;
    font-weight: 100;
    width: 100%;
  }
}
</style>
