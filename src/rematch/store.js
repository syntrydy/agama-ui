import { init } from '@rematch/core'
import * as models from './models/flowModel'

const store = init({ models })

export default store
