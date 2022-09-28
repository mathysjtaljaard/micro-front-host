const local_remotes = {
    header: `header@http://localhost:3001/remoteEntry.js`,
    dashboard: `dashboard@http://localhost:3002/remoteEntry.js`,
    store: `store@http://localhost:3003/remoteEntry.js`,
}

const prod_remotes = {
    header: `header@https://mathysjtaljaard.github.io/micro-front-header/remoteEntry.js`,
    dashboard: `dashboard@https://mathysjtaljaard.github.io/micro-front-dashboard/remoteEntry.js`,
    store: `store@https://mathysjtaljaard.github.io/micro-front-store/remoteEntry.js`,
}

module.exports = {
    production: prod_remotes,
    local: local_remotes
}