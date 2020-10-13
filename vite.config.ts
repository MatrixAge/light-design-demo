import { resolve } from 'path'
import { UserConfig } from 'vite'

export default {
	alias: {
		'/@root/': resolve('./'),
		'/@/': resolve('./src')
	}
} as UserConfig
