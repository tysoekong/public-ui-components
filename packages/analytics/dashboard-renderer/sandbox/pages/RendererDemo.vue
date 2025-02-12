<template>
  <SandboxLayout
    :links="appLinks"
    title="Dashboard Renderer"
  >
    <div class="sandbox-container">
      <h2>Static Dashboard</h2>
      <DashboardRenderer
        :config="(dashboardConfig as DashboardConfig)"
        :context="context"
      />
    </div>
  </SandboxLayout>
</template>

<script setup lang="ts">
import type { DashboardConfig, DashboardRendererContext, TileConfig } from '../../src'
import { ChartTypes, DashboardRenderer } from '../../src'
import { inject } from 'vue'
import { ChartMetricDisplay } from '@kong-ui-public/analytics-chart'
import type { SandboxNavigationItem } from '@kong-ui-public/sandbox-layout'
import { SandboxLayout } from '@kong-ui-public/sandbox-layout'
import '@kong-ui-public/sandbox-layout/dist/style.css'

const appLinks: SandboxNavigationItem[] = inject('app-links', [])

const context: DashboardRendererContext = {
  filters: {},
  timeSpec: '',
}

const dashboardConfig: DashboardConfig = {
  gridSize: {
    cols: 6,
    rows: 9,
  },
  tiles: [
    {
      definition: {
        chart: {
          type: ChartTypes.HorizontalBar,
        },
        query: {},
      },
      layout: {
        position: {
          col: 0,
          row: 0,
        },
        size: {
          cols: 3,
          rows: 2,
        },
      },
    } as TileConfig,
    {
      definition: {
        chart: {
          type: ChartTypes.VerticalBar,
          showAnnotations: false,
        },
        query: {},
      },
      layout: {
        position: {
          col: 3,
          row: 0,
        },
        size: {
          cols: 3,
          rows: 2,
        },
      },
    } as TileConfig,
    {
      definition: {
        chart: {
          type: ChartTypes.TimeseriesLine,
          fill: true,
        },
        query: { type: 'timeseries' },
      },
      layout: {
        position: {
          col: 0,
          row: 2,
        },
        size: {
          cols: 6,
          rows: 2,
        },
      },
    } as TileConfig,
    {
      definition: {
        chart: {
          type: ChartTypes.Gauge,
          metricDisplay: ChartMetricDisplay.Full,
          reverseDataset: true,
          numerator: 0,
        },
        query: {},
      },
      layout: {
        position: {
          col: 0,
          row: 4,
        },
        size: {
          cols: 1,
          rows: 1,
        },
      },
    } as TileConfig,
  ],
}

</script>
