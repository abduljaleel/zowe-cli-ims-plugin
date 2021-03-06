/*
* This program and the accompanying materials are made available under the terms of the *
* Eclipse Public License v2.0 which accompanies this distribution, and is available at *
* https://www.eclipse.org/legal/epl-v20.html                                      *
*                                                                                 *
* SPDX-License-Identifier: EPL-2.0                                                *
*                                                                                 *
* Copyright Contributors to the Zowe Project.                                     *
*                                                                                 *
*/

import { ICommandDefinition } from "@zowe/imperative";
import { ProgramDefinition } from "./program/Program.definition";
import { TransactionDefinition } from "./transaction/Transaction.definition";

import i18nTypings from "../-strings-/en";
import { ImsSessionUtils } from "../ImsSessionUtils";

// Does not use the import in anticipation of some internationalization work to be done later.
const strings = (require("../-strings-/en").default as typeof i18nTypings).UPDATE;

/**
 * Definition for the "update" group of commands under the IMS plugin
 */
const definition: ICommandDefinition = {
    name: "update", aliases: ["upd"],
    summary: strings.SUMMARY,
    description: strings.DESCRIPTION,
    type: "group",
    children: [ProgramDefinition,
        TransactionDefinition],
    passOn: [
        {
            property: "options",
            value: ImsSessionUtils.IMS_CONNECTION_OPTIONS,
            merge: true,
            ignoreNodes: [
                {type: "group"}
            ]
        }
    ]
};
export = definition;
