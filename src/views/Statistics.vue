<template>
    <Page>
        <div class="row">
            <div class="col-12 mb-4">
                <Title>Statistics</Title>
            </div>
            <div class="container">
                <div id="chart"></div>
            </div>
        </div>
    </Page>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from '@/layouts/Page.vue';
import Title from '@/components/Title.vue';
import { GoogleCharts } from 'google-charts/dist/googleCharts';
import Location from '@/models/Location';
import { mapState } from 'vuex';

export default Vue.extend({
    components: {
        Page,
        Title,
    },
    computed: mapState(['USA']),
    async created() {
        await this.$store.dispatch('GET_USA_DATA');
        window.addEventListener('resize', this.renderChart);
        this.renderChart();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.renderChart);
    },
    methods: {
        renderChart() {
            GoogleCharts.load(this.drawChart);
        },
        drawChart() {

            const chartOptions = {
                chartArea: {height: '100%', width: '100%'},
                is3D: true,
                legend: {
                    position: 'labeled',
                },
            };

            const categories = [
                { singular: 'National Park', label: 'National Parks' },
                { singular: 'Point of Interest', label: 'Points of Interest' },
                { singular: 'Landmark', label: 'Landmarks' },
                { singular: 'Museum', label: 'Museums' },
                { singular: 'Outdoors', label: 'Outdoors' },
            ];

            // Calculates count for each category.
            const preData = categories.map((item, index) => {
                const countOfItem = this.USA.filter(
                    (location: Location) => {
                        return location.fields.category === item.singular
                            ? true
                            : false;
                    },
                );

                return [item.label, countOfItem.length];
            });

            // Merges my data and chart headers
            const postData = GoogleCharts.api.visualization.arrayToDataTable([
                ['Location Category', 'Number of Locations'],
                ...preData,
            ]);

            const chart = new GoogleCharts.api.visualization.PieChart(
                document.getElementById('chart'),
            );

            chart.draw(postData, chartOptions);
        },
    },
});
</script>
<style scoped>
/* 
    These responsive heights are important for the labels of the chart.
*/
#chart {
    height: 600px;
}

@media only screen and (max-width: 1200px) {
    #chart {
        height: 400px;
    }
}

@media only screen and (max-width:576px) {
    #chart {
        height: 200px;
    }
}
</style>
