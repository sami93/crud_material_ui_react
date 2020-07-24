import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export const go = (path: string) => history.push(path)

export const replace = (path: string) => history.replace(path)
