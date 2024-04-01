<template>
  <div class="contentContainer">
    <div>
      <div class="summary-header">
        <h1 class="summary-title">Summary</h1>
        <q-btn
          @click="downloadExcel"
          class="download-btn"
          color="primary"
          label="Download Excel"
        ></q-btn>
      </div>
      <div class="summary-items">
        <!-- Repeat the following block for each summary item -->
        <div
          v-for="summaryItem in summaryItems"
          :key="summaryItem.id"
          class="summary-item"
        >
          <p class="item-id">ID : {{ summaryItem.id }}</p>
          <p class="device-title">
            Device Title : {{ summaryItem.deviceTitle }}
          </p>
          <div class="progress-bars">
            <div class="progress-bar">
              <div class="outer">
                <div
                  class="inner"
                  :style="{
                    backgroundColor: summaryItem.itemCountColor,
                    borderColor: summaryItem.itemCountBorderColor,
                  }"
                >
                  <div><img src="/items1.svg" class="icon" /></div>
                  <div class="title">Item Count</div>
                  <div class="current-value">{{ summaryItem.itemCount }}</div>
                </div>
                <q-circular-progress
                  :value="summaryItem.itemCountPercentage"
                  :color="summaryItem.itemCountColor"
                  :size="180"
                ></q-circular-progress>
              </div>
            </div>
            <div class="progress-bar">
              <div class="outer">
                <div
                  class="inner"
                  :style="{
                    backgroundColor: summaryItem.batteryPercentageColor,
                    borderColor: summaryItem.batteryPercentageBorderColor,
                  }"
                >
                  <div><img src="/battery1.svg" class="icon" /></div>
                  <div class="title">Battery Percentage</div>
                  <div class="current-value">
                    {{ summaryItem.batteryPercentage }}
                  </div>
                </div>
                <q-circular-progress
                  :value="summaryItem.batteryPercentage"
                  :color="summaryItem.batteryPercentageColor"
                  :size="180"
                ></q-circular-progress>
              </div>
            </div>
          </div>
        </div>
        <!-- End of repeated block -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      summaryItems: [
        {
          id: "65b76bca33e3a28053ff0b22",
          deviceTitle: "Changi",
          itemCount: 17,
          itemCountColor: "rgb(247, 143, 94)",
          itemCountBorderColor: "rgb(247, 143, 94)",
          itemCountPercentage: 80,
          batteryPercentage: "10%",
          batteryPercentageColor: "rgb(94, 153, 247)",
          batteryPercentageBorderColor: "rgb(94, 153, 247)",
        },
        {
          id: "65b74d4bb369aa872eb5be79",
          deviceTitle: "Hamiltion.",
          itemCount: 9,
          itemCountColor: "rgb(247, 143, 94)",
          itemCountBorderColor: "rgb(247, 143, 94)",
          itemCountPercentage: 60,
          batteryPercentage: "60%",
          batteryPercentageColor: "rgb(94, 153, 247)",
          batteryPercentageBorderColor: "rgb(94, 153, 247)",
        },
        {
          id: "65b70c49e00eb99161de1ba5",
          deviceTitle: "Collins Aeronplace",
          itemCount: 4,
          itemCountColor: "rgb(247, 143, 94)",
          itemCountBorderColor: "rgb(247, 143, 94)",
          itemCountPercentage: 20,
          batteryPercentage: "60%",
          batteryPercentageColor: "rgb(94, 153, 247)",
          batteryPercentageBorderColor: "rgb(94, 153, 247)",
        },
      ],
    };
  },
  methods: {
    downloadExcel() {
      // Implement download Excel functionality
      console.log("Download Excel clicked");
    },
  },
};
</script>

<style scoped>
.contentContainer {
  padding: 15px;
}

.summary-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
}

.summary-title {
  color: #ffffff;
}

.download-btn {
  margin-left: 30px;
}

.summary-item {
  padding: 15px;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
}

.item-id,
.device-title {
  margin-bottom: 5px;
  color: #ffffff;
}

.progress-bars {
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-bar {
  margin-right: 10px;
}

.outer {
  box-shadow:
    rgba(221, 221, 221, 0.75) 3px 3px 5px -1px,
    rgba(221, 221, 221, 0.75) -3px -3px 5px -1px;
}

.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
}

.icon {
  width: 50px;
  height: 50px;
}

.title,
.current-value {
  color: #000000;
}
</style>
