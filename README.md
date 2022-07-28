# Simple logging tool to log to a `.txt` file or the console.

## Usage

`const log = require('logfile-logger')`

### Logging to console:
`log.console(<message>)` 

### Logging to logfile:

simple (this logs to a file called logs.txt in utf8 encoding): 

`log.file(<message>)`

advanced (`logfile name` and `encoding` are optional)

`log.file(<mesasge>, <logfile name>.txt, <encoding>)`

### Logging to console and logfile:

`log.everywhere(<mesasge>, <logfile name>.txt, <encoding>)`


note: 
- `encoding` can be, `ascii`, `utf8` or `base64`
- `logfile name` and `encoding` are optional, if not parsed `logs.txt` and `utf8` will be used by default
