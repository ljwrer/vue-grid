/**
 * Created by Ray on 2017/6/24.
 */
export default {
    functional:true,
    props:['render'],
    render(h,ctx){
        return ctx.props.render(h)
    }
}
