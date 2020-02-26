import { withKnobs, text } from '@storybook/addon-knobs/vue';
import { action } from '@storybook/addon-actions';
import PVerticalLayout2 from '@/components/organisms/layouts/vertical-layout/VerticalLayout2.vue';

export default {
    title: 'organisms/layouts/vertical-layout2',
    component: PVerticalLayout2,
    decorators: [withKnobs],
    parameters: {
        info: {
            summary: '',
            components: { PVerticalLayout2 },
        },
    },
};

export const defaultCase = () => ({
    components: { PVerticalLayout2 },
    props: {
    },
    template: '<div style="width: 80vw"><p-vertical-layout2></p-vertical-layout2></div>',
    setup() {

    },
});