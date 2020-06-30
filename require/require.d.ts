/// <reference types="node" />

import Module = require('module')

declare function getRequireFunction (parentModule?: Module): NodeJS.Require | undefined;
