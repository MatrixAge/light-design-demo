import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import _menu_items from '/@/data/menu_items'

export default defineComponent({
	data () {
		return {
			menu_items: [],
			path: '',
			group: false
		}
	},
	setup () {
		const state = reactive({ menu_items: [], group: false } as any)
		const router = useRouter()
		const { currentRoute: { value: { path } } } = router
		const paths = path.split('/')

		if (path === '/com') {
			state.menu_items = _menu_items
		}

		if (paths.length === 3) {
			const hit = _menu_items.findIndex((item) => item.path === paths[2])

			if (hit >= 0) {
				state.menu_items = _menu_items.filter(
					(item) => path === `/com/${item.path}`
				)

				state.group = true
			}
		}

		const back = () => {
			router.back()
		}

		return {
			...toRefs(state),
			path,
			back
		}
	}
})
