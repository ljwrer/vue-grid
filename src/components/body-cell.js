export default {
    name: 'TableExpand',
    functional: true,
    props: {
        value: null,
        render: Function,
        index: Number,
        column: {
            type: Object,
            default: null
        }
    },
    render: (h, ctx) => {
        const params = {
            value: ctx.props.value,
            index: ctx.props.index
        };
        return ctx.props.render(h, params);
    }
};
