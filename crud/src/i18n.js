import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadlocalmessage(){
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.lenght > 1){
            const locale = matched[i]
            messages[locales] = locales(key)
        }
    });
    return messages
}

export default new VueI18n({
    locale: 'fr',
    fallbackLocale: 'fr',
    messages: loadLocaleMessages()
})