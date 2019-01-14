import firebase from 'firebase/app'
import 'firebase/firestore'

import { config } from './config'

firebase.initializeApp(config)

export const database = firebase.firestore()

database.settings(
    {timestampsInSnapshots: true}
)