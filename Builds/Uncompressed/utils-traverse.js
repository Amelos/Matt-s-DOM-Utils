var Utils = Utils || {},
	global = this;
/*
        Matt's DOM Utils

        Description:

        A collection of widely-tested DOM utilities and modules
        that work in a maximal amount of environments.

        Contact:

        Matt McDonald
        [firstName.toLowerCase();]@fortybelow.ca
        http://www.fortybelow.ca
*/

/*
        jslint browser: true, sloppy: true,
        white: true, maxerr: 50, indent: 8
*/

if (Utils) {
	(function () {

		/*
                        Utils.raise

                        Description:

                        DOM Level 4-compliant custom errors and
                        methods to "raise" (throw) them.

                        Dependencies:

                        * null;
		*/

		/*
                        Public object exposing errors as specified
                        in the DOM Level 4 Spec 3.3 (Error types).
		*/

		var errorTypes = {
			"INDEX_SIZE_ERROR": "The index is not in " +
				"the allowed range.",
			"HEIRARCHY_REQUEST_ERROR": "The operation " +
				"would yield an incorrect node " +
				"tree.",
			"WRONG_DOCUMENT_ERROR": "The object is in " +
				"the wrong document.",
			"INVALID_CHARACTER_ERROR": "The string " +
				"contains invalid characters.",
			"NO_MODIFICATION_ALLOWED_ERROR": "The " +
				"cannot be modified.",
			"NOT_FOUND_ERROR": "The object cannot be " +
				"found here.",
			"NOT_SUPPORTED_ERROR": "The operation is " +
				"not supported.",
			"INVALID_STATE_ERROR": "The object is in " +
				"an invalid state.",
			"SYNTAX_ERROR": "The string did not match " +
				"the expected pattern.",
			"INVALID_MODIFICATION_ERROR": "The object " +
				"can not be modified in this way.",
			"NAMESPACE_ERROR": "The operation is not " +
				"allowed by Namespaces in XML.",
			"INVALID_ACCESS_ERROR": "The object does " +
				"not support the operation or " +
				"argument.",
			"TYPE_MISMATCH_ERROR": "The type of the " +
				"object does not match the " +
				"expected type.",
			"SECURITY_ERROR": "The operation is " +
				"insecure.",
			"NETWORK_ERROR": "A network error " +
				"occurred.",
			"ABORT_ERROR": "The operation was " +
				"aborted.",
			"URL_MISMATCH_ERROR": "The given URL " +
				"does not match another URL.",
			"QUOTA_EXCEEDED_ERROR": "The quota has " +
				"been exceeded.",
			"TIMEOUT_ERROR": "The operation timed " +
				"out.",
			"INVALID_NODE_TYPE_ERROR": "The supplied " +
				"node is incorrect or has an " +
				"incorrect ancestor for this " +
				"operation.",
			"DATA_CLONE_ERROR": "The object can not " +
				"be cloned."
		};


                /*        PUBLIC METHOD        */


		function raiseIndexSize()
		{
			throw new Error(
				errorTypes.INDEX_SIZE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseHeirarchyRequest()
		{
			throw new Error(
				errorTypes.HEIRARCHY_REQUEST_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseWrongDocument()
		{
			throw new Error(
				errorTypes.WRONG_DOCUMENT_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseInvalidCharacter()
		{
			throw new Error(
				errorTypes.INVALID_CHARACTER_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseNoModificationAllowed()
		{
			var key = "NO_MODIFICATION_ALLOWED_ERROR";
			throw new Error(
				errorTypes[key]
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseNotFound()
		{
			throw new Error(
				errorTypes.NOT_FOUND_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseNotSupported()
		{
			throw new Error(
				errorTypes.NOT_SUPPORTED_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseInvalidState()
		{
			throw new Error(
				errorTypes.INVALID_STATE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseSyntax()
		{
			throw new Error(
				errorTypes.SYNTAX_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseInvalidModification()
		{
			throw new Error(
				errorTypes.INVALID_MODIFICATION_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseNamespace()
		{
			throw new Error(
				errorTypes.NAMESPACE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseInvalidAccess()
		{
			throw new Error(
				errorTypes.INVALID_ACCESS_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseTypeMismatch()
		{
			throw new Error(
				errorTypes.TYPE_MISMATCH_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseSecurity()
		{
			throw new Error(
				errorTypes.SECURITY_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseNetwork()
		{
			throw new Error(
				errorTypes.NETWORK_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseAbort()
		{
			throw new Error(
				errorTypes.ABORT_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseURLMismatch()
		{
			throw new Error(
				errorTypes.URL_MISMATCH_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseQuotaExceeded()
		{
			throw new Error(
				errorTypes.QUOTA_EXCEEDED_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseTimeout()
		{
			throw new Error(
				errorTypes.TIMEOUT_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseInvalidNodeType()
		{
			throw new Error(
				errorTypes.INVALID_NODE_TYPE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function raiseDataClone()
		{
			throw new Error(
				errorTypes.DATA_CLONE_ERROR
			);
		}


                /*        END PUBLIC METHOD        */


		Utils.raise = Utils.raise || {
			"types": errorTypes,

			"indexSize": raiseIndexSize,
			"heirarchyRequest":
				raiseHeirarchyRequest,
			"wrongDocument": raiseWrongDocument,
			"invalidCharacter":
				raiseInvalidCharacter,
			"noModificationAllowed":
				raiseNoModificationAllowed,
			"notFound": raiseNotFound,
			"notSupported": raiseNotSupported,
			"invalidState": raiseInvalidState,
			"syntax": raiseSyntax,
			"invalidModification":
				raiseInvalidModification,
			"namespace": raiseNamespace,
			"invalidAccess": raiseInvalidAccess,
			"typeMismatch": raiseTypeMismatch,
			"security": raiseSecurity,
			"network": raiseNetwork,
			"abort": raiseAbort,
			"urlMismatch": raiseURLMismatch,
			"quotaExceeded": raiseQuotaExceeded,
			"timeout": raiseTimeout,
			"invalidNodeType":
				raiseInvalidNodeType,
			"dataClone": raiseDataClone
		};
	}());
}

if (Utils) {
	(function () {

		/*
                        Utils.types

                        Description:

                        Documented `nodeType`s. See the DOM 4
                        Spec 5.3 (Node, nodeType).

                        Dependencies:

                        * null;
		*/

		/*
                        Public object of documented `nodeType`s.
                        See the DOM 4 Spec 5.3 (Node, nodeType).
		*/

		Utils.types = Utils.types || {
			"ELEMENT_NODE": 1,
			"ATTRIBUTE_NODE": 2,
			"TEXT_NODE": 3,
			"CDATA_SECTION_NODE": 4,
			"ENTITY_REFERENCE_NODE": 5,
			"ENTITY_NODE": 6,
			"PROCRESSING_INSTRUCTION_NODE": 7,
			"COMMENT_NODE": 8,
			"DOCUMENT_NODE": 9,
			"DOCUMENT_TYPE_NODE": 10,
			"DOCUMENT_FRAGMENT_NODE": 11,
			"NOTATION_NODE": 12
		};
	}());
}
if (Utils) {
	(function () {

		/*
                        Utils.helpers

                        Description:

                        Various helper methods for common tasks.

                        Dependencies:

                        * null;
		*/


                /*        PUBLIC METHOD        */


		function makeLinearArray(
			obj
		)
		{
			/*
                                Public method that
                                takes an iterable object and
                                creates an array.
			*/
			var index,
				result = [],
				node;
			if (obj && obj.length) {
				index = obj.length - 1;
				while (index > -1) {
					node = obj[index];
					result.unshift(node);
					index -= 1;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.helpers = Utils.helpers || {
			"makeLinearArray": makeLinearArray
		};
	}());
}

if (Utils) {
	(function () {

		/*
                        Utils.is

                        Description:

                        Various tests

                        Dependencies:

                        * Utils.host;
                        * Utils.types;
		*/

		var nodeTypes = Utils.types;


                /*        PUBLIC METHOD        */


		function isNode(node)
		{
			/*
                                Public method that returns a
                                boolean asserting if `node` is
                                not falsey and has a numeric
                                `nodeType` property.
			*/
			return !!(node &&
				typeof node.nodeType ===
				"number");
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isNodeType(
			node,
			type
		)
		{
			/*
                                Public method that returns a
                                boolean asserting if `node` is
                                of type (via `nodeType`) `type`.
			*/
			var valid = isNode(node),
				result = false;
			type = Number(type);
			if (valid) {
				result = node.nodeType === type;
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isElementNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.ELEMENT_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isAttributeNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.ATTRIBUTE_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isTextNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.TEXT_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isCDataSectionNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.CDATA_SECTION_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isEntityReferenceNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var key = "ENTITY_REFERENCE_NODE",
				type = nodeTypes[key];
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isEntityNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.ENTITY_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isProcessingInstructionNode(
			node
		)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var key = "PROCESSING_INSTRUCTION_NODE",
				type = nodeTypes[key];
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isCommentNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.COMMENT_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isDocumentNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.DOCUMENT_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isDocumentTypeNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.DOCUMENT_TYPE_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isDocumentFragmentNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var key = "DOCUMENT_FRAGMENT_NODE",
				type = nodeTypes[key];
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isNotationNode(node)
		{
			/*
                                Public method that returns
                                a boolean via `isNodeType`.
			*/
			var type = nodeTypes.NOTATION_NODE;
			return isNodeType(node, type);
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function isHostObject(obj)
		{
			var result = false;
			if (typeof obj === "object" ||
				typeof obj === "function") {
				result = true;
			}
			return result;
		}


                /*        END PUBLIC METHOD */


		Utils.is = Utils.is || {
			"node": isNode,
			"nodeType": isNodeType,
			"element": isElementNode,
			"attribute": isAttributeNode,
			"text": isTextNode,
			"cDataSection": isCDataSectionNode,
			"entityReference":
				isEntityReferenceNode,
			"entity": isEntityNode,
			"processingInstruction":
				isProcessingInstructionNode,
			"comment": isCommentNode,
			"document": isDocumentNode,
			"documentType": isDocumentTypeNode,
			"documentFragment":
				isDocumentFragmentNode,
			"notation": isNotationNode,

			"hostObject": isHostObject
		};
	}());
}

if (Utils) {
	(function () {

		/*
                        Utils.can

                        Description:

                        Various capability tests.

                        Dependencies:

                        * Utils.host;
                        * Utils.node;
                        * Utils.is;
		*/

		function generateTextGetterKeys()
		{
			/*
                                Keys for `generateTextGetters`
			*/
			return [
				"ELEMENT_NODE",
				"TEXT_NODE",
				"COMMENT_NODE",
				"PROCESSING_INSTRUCTION_NODE",
				"DOCUMENT_FRAGMENT_NODE"
			];
		}

		function generateTextGetters()
		{
			/*
                                Private method that "generates"
                                an object with keys of `nodeType`s
                                that can "get" text.
			*/
			var keys = generateTextGetterKeys(),
				key,
				result = {};
			for (key in keys) {
				// you win this time JSLint
				if (keys.hasOwnProperty(key)) {
					result[key] = true;
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function canGetText(node)
		{
			/*
                                Public method that returns a
                                boolean asserting if the specified
                                node can "get" textual content.
			*/
			var validNode = Utils.is.node(node),
				getters = generateTextGetters(),
				getter,
				result = false;
			if (validNode) {
				getter = getters[node.nodeType];
				if (getter) {
					result = true;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function generateTextSetterKeys()
		{
			/*
                                Keys for `generateTextSetters`
			*/
			return [
				"ELEMENT_NODE",
				"TEXT_NODE",
				"COMMENT_NODE",
				"PROCESSING_INSTRUCTION_NODE",
				"DOCUMENT_FRAGMENT_NODE"
			];
		}

		function generateTextSetters()
		{
			/*
                                Private method that "generates"
                                an object with keys of `nodeType`s
                                that can "set" text.
			*/
			var keys = generateTextSetterKeys(),
				key,
				result = {};
			for (key in keys) {
				// you win this time JSLint
				if (keys.hasOwnProperty(key)) {
					result[key] = true;
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function canSetText(node)
		{
			/*
                                Public method that returns a
                                boolean asserting if the specified
                                node can "set" textual content.
			*/
			var validNode = Utils.is.node(node),
				setters = generateTextSetters(),
				setter,
				result = false;
			if (validNode) {
				setter = setters[node.nodeType];
				if (setter) {
					result = true;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function canUseClassList(node)
		{
			/*
                                Public method that returns a
                                boolean asserting if the specified
                                node can "use" the `classList`
                                object.
			*/
			var isElement = Utils.is.element(node),
				result = false;
			if (isElement) {
				result = Utils.is.hostObject(
					node.classList
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.can = Utils.can || {
			"getText": canGetText,
			"setText": canSetText,
			"useClassList": canUseClassList
		};
	}());
}

if (Utils) {
	(function () {

		/*
                        Utils.node

                        Description:

                        Various DOM node method wrappers.

                        Dependencies:

                        * Utils.host;
                        * Utils.is;
		*/


                /*        PUBLIC METHOD        */


		function insertBefore(
			par,
			newNode,
			refNode
		)
		{
			/*
                                Public wrapper method for
                                `insertBefore`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.is.node(par),
				newIsNode = Utils.is.node(newNode),
				refIsNode = Utils.is.node(refNode),
				isHostObject,
				key = "insertBefore",
				result = null;
			if (validParent && newIsNode && refIsNode) {
				isHostObject = Utils.is.hostObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						newNode,
						refNode
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function appendChild(
			par,
			node
		)
		{
			/*
                                Public wrapper method for
                                `appendChild`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.is.node(par),
				validNode = Utils.is.node(node),
				isHostObject,
				key = "appendChild",
				result = null;
			if (validParent && validNode) {
				isHostObject = Utils.is.hostObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						node
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function removeChild(
			par,
			node
		)
		{
			/*
                                Public wrapper method for
                                `removeChild`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.is.node(par),
				validNode = Utils.is.node(node),
				isHostObject,
				key = "removeChild",
				result = null;
			if (validParent && validNode) {
				isHostObject = Utils.is.hostObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						node
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function replaceChild(
			par,
			newNode,
			oldNode
		)
		{
			/*
                                Public wrapper method for
                                `replaceChild`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var validParent = Utils.is.node(par),
				newIsNode = Utils.is.node(newNode),
				oldIsNode = Utils.is.node(oldNode),
				isHostObject,
				key = "replaceChild",
				result = null;
			if (validParent && newIsNode && oldIsNode) {
				isHostObject = Utils.is.hostObject(
					par[key]
				);
				if (isHostObject) {
					result = par[key](
						newNode,
						oldNode
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function cloneNode(
			node,
			deep
		)
		{
			/*
                                Public wrapper method for
                                `cloneNode`; returns the wrapper
                                method's result or `null` if not
                                applicable.
			*/
			var isNode = Utils.is.node(node),
				isHostObject,
				key = "cloneNode",
				result = null;
			deep = Boolean(deep);
			if (isNode) {
				isHostObject = Utils.is.hostObject(
					node[key]
				);
				if (isHostObject) {
					result = node[key](
						node,
						deep
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.node = Utils.node || {
			"prepend": insertBefore,
			"append": appendChild,
			"remove": removeChild,
			"replace": replaceChild,
			"clone": cloneNode
		};
	}());
}

if (Utils) {
	(function () {

		/*
                        Utils.create

                        Description:

                        DOM creation method wrappers.

                        Dependencies:

                        * Utils.host;
                        * Utils.node;
                        * Utils.is;
		*/


                /*        PUBLIC METHOD        */


		function createElement(
			doc,
			tag
		)
		{
			/*
                                Public wrapper method for
                                `createElement`; returns the
                                wrapper method's result or `null`
                                if not applicable.
			*/
			var isDocument =
				Utils.is.document(doc),
				key = "createElement",
				isHostObject,
				result = null;
			tag = String(tag);
			if (isDocument) {
				isHostObject = Utils.is.hostObject(
					doc[key]
				);
				if (isHostObject) {
					result = doc[key](
						tag
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function createElementNS(
			doc,
			ns,
			tag
		)
		{
			/*
                                Public wrapper method for
                                `createElementNS`; returns the
                                wrapper method's result or `null`
                                if not applicable.
			*/
			var isDocument =
				Utils.is.document(doc),
				key = "createElementNS",
				isHostObject,
				result = null;
			ns = String(ns);
			tag = String(tag);
			if (isDocument) {
				isHostObject = Utils.is.hostObject(
					doc[key]
				);
				if (isHostObject) {
					result = doc[key](
						ns,
						tag
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function createDocumentFragment(
			doc
		)
		{
			/*
                                Public wrapper method for
                                `createDocumentFragment`; returns
                                the wrapper method's result or
                                `null` if not applicable.
			*/
			var isDocument =
				Utils.is.document(doc),
				key = "createDocumentFragment",
				isHostObject,
				result = null;
			if (isDocument) {
				isHostObject = Utils.is.hostObject(
					doc[key]
				);
				if (isHostObject) {
					result = doc[key]();
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function createTextNode(
			doc,
			text
		)
		{
			/*
                                Public wrapper method for
                                `createTextNode`; returns the
                                wrapper method's result or `null`
                                if not applicable.
			*/
			var isDocument =
				Utils.is.document(doc),
				key = "createTextNode",
				isHostObject,
				result = null;
			text = String(text);
			if (isDocument) {
				isHostObject = Utils.is.hostObject(
					doc[key]
				);
				if (isHostObject) {
					result = doc[key](
						text
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function createComment(
			doc,
			text
		)
		{
			/*
                                Public wrapper method for
                                `createComment`; returns the
                                wrapper method's result or `null`
                                if not applicable.
			*/
			var isDocument =
				Utils.is.document(doc),
				key = "createComment",
				isHostObject,
				result = null;
			text = String(text);
			if (isDocument) {
				isHostObject = Utils.is.hostObject(
					doc[key]
				);
				if (isHostObject) {
					result = doc[key](
						text
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function createProcessingInstruction(
			doc,
			target,
			text
		)
		{
			/*
                                Public wrapper method for
                                `createTextNode`; returns the
                                wrapper method's result or `null`
                                if not applicable.
			*/
			var isDocument =
				Utils.is.document(doc),
				key = "createProcessingInstruction",
				isHostObject,
				result = null;
			target = String(target);
			text = String(text);
			if (isDocument) {
				isHostObject = Utils.is.hostObject(
					doc[key]
				);
				if (isHostObject) {
					result = doc[key](
						target,
						text
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.create = Utils.create || {
			"element": createElement,
			"elementNS": createElementNS,
			"documentFragment":
				createDocumentFragment,
			"text": createTextNode,
			"comment": createComment,
			"processingInstruction":
				createProcessingInstruction
		};
	}());
}
if (Utils) {
	(function () {

		/*
                        Utils.traverse

                        Description:

                        Various methods used to traverse DOM
                        nodes.

                        Dependencies:

                        * Utils.host;
                        * Utils.helpers;
                        * Utils.node;
                        * Utils.is;
                        * Utils.can;
			* Utils.create;
		*/

		var nodeTypes = Utils.types;


                /*        PUBLIC METHOD        */


		function getAncestorList(node)
		{
			/*
                                Public method that builds a linked
                                list of ancestors from `node` all
                                the way to the top of the document
                                tree (`document`); returns null
                                if not applicable.

                                Example result (`node` is
                                `document.documentElement`):

                                {
                                        "parent": {
                                                "parent": null,
                                                "value": [`document`]
                                        },
                                        "value": [`node`]
                                }
			*/
			var isNode = Utils.is.node(node),
				result = null;
			if (isNode) {
				result = {};
				result.value = node;
				result.parent = getAncestorList(
					node.parentNode
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function listContainsNode(
			list,
			node
		)
		{
			/*
                                Private method returning
                                a boolean asserting a if a linked
                                list (preferably created via
                                `getAncestorList`) contains `node`.
			*/
			var isNode = Utils.is.node(node),
				result = false;
			while (isNode && typeof list.parent !==
				"undefined") {
				if (list.value === node) {
					result = true;
					break;
				}
				list = list.parent;
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function isAncestor(
			par,
			node
		)
		{
			/*
                                Public method returning a boolean
                                asserting if `par` is an
                                ancestor of `node` (via
                                `listContainsNode`).
			*/
			var isNode = Utils.is.node(node),
				list,
				result = false;
			if (isNode) {
				list = getAncestorList(node);
				result = listContainsNode(
					list,
					par
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function makeLinearArray(obj)
		{
			/*
				Private wrapper for
				`Utils.helpers.makeLinearArray`.
			*/
			return Utils.helpers.makeLinearArray(obj);
		}


                /*        PUBLIC METHOD        */


		function getChildNodes(node)
		{
			/*
                                Public method that exposes a
                                static array of `childNodes`;
                                returns `null` if
                                not applicable.
			*/
			var isNode = Utils.is.node(node),
				key = "childNodes",
				isHostObject,
				result = null;
			if (isNode) {
				isHostObject = Utils.is.hostObject(
					node[key]
				);
				if (isHostObject) {
					result = makeLinearArray(
						node[key]
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function handleCallback(
			node,
			callback,
			result
		)
		{
			/*
                                Helper method for `traverse*`
                                methods; calls callback with
                                specified node passed;
			*/
			var called;
			if (typeof callback === "function") {
				called = callback(node);
				if (called === true) {
					result.unshift(node);
				} else if (called) {
					result.unshift(called);
				}
			}
		}


                /*        PUBLIC METHOD        */


		function traverseLinear(
			nodes,
			callback
		)
		{
			/*
                                Public method that traverses
                                an array-like objects, running
                                a callback on each node in the
                                array.
			*/
			var index,
				node,
				result = [];
			if (nodes && nodes.length) {
				index = nodes.length - 1;
				while (index > -1) {
					node = nodes[index];
					handleCallback(
						node,
						callback,
						result
					);
					index -= 1;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function addRecursiveTree(
			tree,
			par
		)
		{
			/*
                                Private helper method for
                                `traverseRecursive`; returns
                                boolean asserting if tree
                                can be added to `par`.
			*/
			var result = false;
			if (tree.length) {
				par.unshift(tree);
				result = true;
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function traverseRecursive(
			nodes,
			callback
		)
		{
			/*
                                Public recursive method that
                                traverses an array-like object,
                                running a callback on each node
                                in the array.
			*/
			var result = [],
				index = -1,
				node,
				tree;
			if (nodes && nodes.length) {
				index = nodes.length - 1;
				while (index > -1) {
					node = nodes[index];
					tree = traverseRecursive(
						node.childNodes,
						callback
					);
					addRecursiveTree(
						tree,
						result
					);
					handleCallback(
						node,
						callback,
						result
					);
					index -= 1;
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function addChildNodeTree(
			tree,
			par
		)
		{
			/*
                                Private helper method for
                                `collectChildNodeTree`; returns
                                a boolean asserting if the tree
                                passed could be added.
			*/
			var result = false;
			if (tree.length) {
				par.push(tree);
				result = true;
			}
			return result;
		}

		function canTraverse(node)
		{
			/*
                                Private method returning a
                                boolean asserting if a node
                                can be traversed via
                                `node.childNodes` and
                                `node.nextSibling`.
			*/
			var isNode = Utils.is.node(node),
				hasChildNodes,
				hasSibling,
				result = false;
			if (isNode) {
				hasChildNodes = Utils.is.hostObject(
					node.childNodes
				);
				hasSibling = Utils.is.hostObject(
					node.nextSibling
				);
				if (hasChildNodes && hasSibling
					&& node.childNodes.length) {
					result = true;
				}
			}
			return result;
		}

		function collectChildNodeTree(
			node
		)
		{
			/*
                                Private recursive method
                                that takes a node and creates an
                                array from its "childNode tree";
                                returns `null` if not applicable.
			*/
			var hasNodes = canTraverse(node),
				child,
				result = [],
				tree;
			if (hasNodes) {
				child = node.childNodes[0];
				while (child) {
					result.push(child);
					tree = collectChildNodeTree(
						child
					);
					addChildNodeTree(
						tree,
						result
					);
					child = child.nextSibling;
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function getChildNodeTree(node)
		{
			/*
                                Public method that exposes a
                                static array of `childNodes` (via
                                `makeArray`); returns `null` if not
                                applicable.
			*/
			var isNode = Utils.is.node(node),
				isHostObject,
				result = null;
			if (isNode) {
				isHostObject = Utils.is.hostObject(
					node.childNodes
				);
				if (isHostObject) {
					result = collectChildNodeTree(
						node
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function traverseChildNodes(
			node,
			callback
		)
		{
			/*
                                Public method that traverses
                                a node's `childNodes` (via
                                `traverseLinear`); returns `null` if
                                not applicable.
			*/
			var nodes,
				result = null;
			if (typeof callback === "function") {
				nodes = getChildNodes(node);
				result = traverseLinear(
					nodes,
					callback
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function removeNode(
			node
		)
		{
			/*
                                Private method used as a callback
                                for `traverse*`; removes `node`;
                                returns `null` if not applicable.
			*/
			var isNode = Utils.is.node(node),
				key = "parentNode",
				isHostObject,
				result = null;
			if (isNode) {
				isHostObject = Utils.is.hostObject(
					node[key]
				);
				if (isHostObject) {
					Utils.node.remove(
						node[key],
						node
					);
				}
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function clearChildNodes(node)
		{
			/*
                                Public method that clears a
				a node's `childNodes`, returning
				them upon successful removal;
				returns `null` if not applicable.
			*/
			var isNode = Utils.is.node(node),
				result = null;
			if (isNode) {
				result = traverseChildNodes(
					node,
					removeNode
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function forkNativeChildren(node)
		{
			/*
                                Private helper method that
                                builds a node's "native" `children`
                                as a static array; returns `null`
                                if not applicable.
			*/
			var isNode = Utils.is.node(node),
				isHostObject,
				result = null;
			if (isNode) {
				isHostObject = Utils.is.hostObject(
					node.children
				);
				if (isHostObject) {
					result = makeLinearArray(
						node.children
					);
				}
			}
			return result;
		}

		function filterElementNode(node)
		{
                        /*
                                Private callback method intended
                                to be used in conjunction with
                                `traverse*` methods; returns `true`
                                if node passed is an element node;
                                returns `false` otherwise.
                        */
			var isElementNode =
				Utils.is.element(
					node
				),
				result = false;
			if (isElementNode) {
				result = true;
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function getChildren(
			node
		)
		{
			/*
                                Public method that exposes a
                                static array of `children` (via
                                `makeArray`); returns `null` if
                                not applicable.
			*/
			var isNode = Utils.is.node(node),
				nodes = [],
				result = null;
			if (isNode && typeof node.children !==
				"undefined") {
				result = forkNativeChildren(
					node
				);
			} else if (isNode && typeof node.children ===
				"undefined") {
				nodes = getChildNodes(
					node
				);
				result = traverseLinear(
					nodes,
					filterElementNode
				);
			}
			return result;
		}



                /*        END PUBLIC METHOD        */


                /*        PUBLIC METHOD        */


		function traverseChildren(
			node,
			callback
		)
		{
			/*
                                Public method that traverses
                                a node's `children` (via
                                `traverseLinear`); returns `null` if
                                not applicable.
			*/
			var nodes,
				result = null;
			if (typeof callback === "function") {
				nodes = getChildren(node);
				result = traverseLinear(
					nodes,
					callback
				);
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function removeElementNode(node)
		{
                        /*
                                Private callback method intended
                                to be used in conjunction with
                                `traverse*` methods; returns `true`
                                if node passed is an element node
                                and can be removed; returns `false`
                                otherwise.
                        */
			var isElementNode =
				Utils.is.element(
					node
				),
				result = false;
			if (isElementNode) {
				result = Utils.node.remove(
					node
				);
			}
			return result;
		}


                /*        PUBLIC METHOD        */


		function clearChildren(node)
		{
			/*
                                Public method that clears a
				a node's `children`, returning
				them upon successful removal;
				returns `null` if not applicable.
			*/
			var isNode = Utils.is.node(node),
				result = null;
			if (isNode) {
				result = traverseChildren(
					node,
					removeElementNode
				);
			}
			return result;
		}



                /*        END PUBLIC METHOD        */


		function filterTextData(node)
		{
			/*
                                Private callback method intended
                                to be used in conjunction with
                                `traverse*` methods; returns
                                `node.nodeValue` if node passed
                                is a text node; returns `false`
                                otherwise.
			*/
			var validNode =
				Utils.is.text(node),
				result = false;
			if (validNode) {
				result = node.nodeValue;
			}
			return result;
		}

		function grabText(node)
		{
			/*
                                Private helper method for
                                `getText` that grabs the `data`
                                property of a node; returns
                                `null` if not applicable. For
                                more, see `getText`.
			*/
			var isNode = Utils.is.node(node),
				result = null;
			if (isNode && typeof node.data !==
				"undefined") {
				result = node.data;
			}
			return result;
		}

		function collectText(node)
		{
			/*
                                Private helper method for
                                `getText` that recursively
                                concatenates text node data
                                (via `traverseRecursive`);
                                returns `null` if not applicable.
                                For more, see `getText`.
			*/
			var isNode = Utils.is.node(node),
				nodes,
				result = null;
			if (isNode) {
				nodes = getChildNodeTree(
					node
				);
				nodes = traverseRecursive(
					nodes,
					filterTextData
				);
				result = nodes.join("");
			}
			return result;
		}

		function generateTextGetterDecisions()
		{
			/*
                                Private method that returns a
                                decision table based upon
                                accepted `nodeType`s for "getting"
                                textual content.
			*/
			var result = {};
			result[nodeTypes.ELEMENT_NODE] = collectText;
			result[nodeTypes.TEXT_NODE] = grabText;
			result[nodeTypes.COMMENT_NODE] = grabText;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				collectText;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				grabText;
			return result;
		}


                /*        PUBLIC METHOD        */


		function getText(node)
		{
			/*
                                Public method that exposes a
                                string consisting of concatenated
                                text node data or node `data` (via
                                `traverseRecursive`); returns
                                `null` if not applicable. See
                                the DOM 4 Spec section 5.3
                                (`Node.textContent`, getting)
                                for more.
			*/
			var canGet = Utils.can.getText(node),
				decisions =
					generateTextGetterDecisions(),
				decision,
				result = null;
			if (canGet) {
				decision = decisions[node.nodeType];
				if (typeof decision !==
					"undefined") {
					result = decision(node);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		function overrideText(
			text,
			node
		)
		{
			/*
                                Private helper method for
                                `setText` that overrides
                                existing `childNodes` with a
                                text node; returns `null`
                                if not applicable. For more,
                                see `setText`.
			*/
			var isNode = Utils.is.node(node),
				textNode,
				result = null;
			text = String(text);
			textNode = Utils.create.text(
				global.document,
				text
			);
			if (isNode) {
				clearChildNodes(node);
				node.appendChild(textNode);
				result = text;
			}
			return result;
		}

		function replaceText(
			text,
			node
		)
		{
			/*
                                Private helper method for
                                `setText` that replaces
                                `node.data` with `text`;
                                returns `null` if not
                                applicable. For more, see
                                `setText`.
			*/
			var isNode = Utils.is.node(node),
				result = null;
			text = String(text);
			if (isNode && typeof node.data !==
				"undefined") {
				node.data = text;
				result = node.data;
			}
			return result;
		}

		function generateTextSetterDecisions()
		{
			/*
                                Private method that returns a
                                decision table based upon
                                accepted `nodeType`s for "setting"
                                textual content.
			*/
			var result = {};
			result[nodeTypes.ELEMENT_NODE] =
				overrideText;
			result[nodeTypes.TEXT_NODE] =
				replaceText;
			result[nodeTypes.COMMENT_NODE] =
				replaceText;
			result[nodeTypes.DOCUMENT_FRAGMENT_NODE] =
				overrideText;
			result[nodeTypes.PROCESSING_INSTRUCTION_NODE] =
				replaceText;
			return result;
		}


                /*        PUBLIC METHOD        */


		function setText(
			text,
			node
		)
		{
			/*
                                Public method that either
                                overrides a node's (textual)
                                content or its `data`; returns
                                `null` if not applicable. See
                                the DOM 4 Spec section 5.3
                                (`Node.textContent`, setting)
                                for more.
			*/
			var canSet = Utils.can.setText(node),
				decisions =
					generateTextSetterDecisions(),
				decision,
				result = null;
			if (canSet) {
				decision = decisions[node.nodeType];
				if (typeof decision !==
					"undefined") {
					result = decision(
						text,
						node
					);
				}
			}
			return result;
		}


                /*        END PUBLIC METHOD        */


		Utils.traverse = Utils.traverse || {
			"getAncestors": getAncestorList,
			"isAncestor": isAncestor,

			"getChildNodes": getChildNodes,
			"getChildNodeTree": getChildNodeTree,

			"linear": traverseLinear,
			"recursive": traverseRecursive,

			"childNodes": traverseChildNodes,
			"clearChildNodes": clearChildNodes,

			"getChildren": getChildren,
			"children": traverseChildren,
			"clearChildren": clearChildren,

			"getText": getText,
			"setText": setText
		};
	}());
}
