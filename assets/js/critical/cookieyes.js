/* eslint-disable no-undef, no-unused-vars */
{{- if or site.Params.modules.cookieyes.force (not hugo.IsServer) -}}
    {{ with site.Params.modules.cookieyes.id -}}

const s = document.createElement('script')
s.src = 'https://cdn-cookieyes.com/client_data/{{ (. | urlize) }}/script.js'
s.id = 'cookieyes'
s.type = 'text/javascript'
s.async = false
document.getElementsByTagName('head')[0].appendChild(s)

    {{- else -}}
        {{- warnf "Cannot find CookieYes ID, check 'params.modules.cookieyes.id'" -}}
    {{- end -}}
{{- end -}}