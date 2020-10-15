import { defineComponent, reactive, toRefs, watch } from 'vue'
import { useRouter } from 'vue-router'
import _menu_items from '/@/data/menu_items'

export default defineComponent({
	data () {
		return {
			menu_items: [],
			path: ''
		}
	},
	setup () {
		const state = reactive({ menu_items: [] } as any)
		const router = useRouter()
		const { currentRoute: { value: { path } } } = router

		if (path === '/com') {
			state.menu_items = _menu_items
		} else {
			state.menu_items = _menu_items.filter((item) => path === `/com/${item.path}`)
		}

		const paths = path.split('/')

		if (paths.length === 3) {
			const hit = _menu_items.findIndex((item) => item.path === paths[2])

			if (hit > 0) {
				state.menu_items = _menu_items.filter(
					(item) => path === `/com/${item.path}`
				)
			}
		}

		return {
			...toRefs(state),
			path
		}
	}
})
