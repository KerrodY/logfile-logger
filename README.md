# Simple logging tool to log to a `.txt` file or the console.

## Usage

`const log = require('@kerrody/logfile-logger')`

### Logging to console:

`log.console(<message>)` 

### Logging to logfile:

`log.file(<mesasge>, <logfile_name.txt>, <encoding>)`

### Logging to console and logfile:

`log.everywhere(<mesasge>, <logfile_name>.txt, <encoding>)`


#### Note: 
- `encoding` can be, `ascii`, `utf8` or `base64`
- `logfile_name` and `encoding` are optional, if not parsed `logs.txt` and `utf8` will be used by default
