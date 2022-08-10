(self.webpackChunkorda=self.webpackChunkorda||[]).push([[94],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,m=p["".concat(o,".").concat(h)]||p[h]||u[h]||s;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,l=new Array(s);l[0]=p;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6944:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=a(2122),i=a(9756),s=(a(7294),a(3905)),l=["components"],r={id:"glossary",title:"Glossary"},o=void 0,c={unversionedId:"Concepts/glossary",id:"Concepts/glossary",isDocsHomePage:!1,title:"Glossary",description:"any data type",source:"@site/docs/Concepts/glossary.md",sourceDirName:"Concepts",slug:"/Concepts/glossary",permalink:"/docs/Concepts/glossary",editUrl:"https://github.com/4d/orda/edit/main/docs/Concepts/glossary.md",version:"current",frontMatter:{id:"glossary",title:"Glossary"},sidebar:"docs",previous:{title:"Working with data",permalink:"/docs/Concepts/data"}},d=[{value:"<em>any</em> data type",id:"any-data-type",children:[]},{value:"Attribute",id:"attribute",children:[]},{value:"AttributePath",id:"attributepath",children:[]},{value:"Calculated attribute",id:"calculated-attribute",children:[]},{value:"Class code",id:"class-code",children:[]},{value:"Class function",id:"class-function",children:[]},{value:"Computed attribute",id:"computed-attribute",children:[]},{value:"Data model class",id:"data-model-class",children:[]},{value:"Data model object",id:"data-model-object",children:[]},{value:"Data model function",id:"data-model-function",children:[]},{value:"Dataclass",id:"dataclass",children:[]},{value:"DataClass class",id:"dataclass-class",children:[]},{value:"Datastore",id:"datastore",children:[]},{value:"DataStore class",id:"datastore-class",children:[]},{value:"DataStoreImplementation",id:"datastoreimplementation",children:[]},{value:"Deep copy",id:"deep-copy",children:[]},{value:"ds",id:"ds",children:[]},{value:"Entity",id:"entity",children:[]},{value:"Entity selection",id:"entity-selection",children:[]},{value:"Function",id:"function",children:[]},{value:"Generic class",id:"generic-class",children:[]},{value:"Lazy loading",id:"lazy-loading",children:[]},{value:"Main datastore",id:"main-datastore",children:[]},{value:"Optimistic Lock",id:"optimistic-lock",children:[]},{value:"ORDA",id:"orda",children:[]},{value:"Pessimistic Lock",id:"pessimistic-lock",children:[]},{value:"Property",id:"property",children:[]},{value:"PropertyPath",id:"propertypath",children:[]},{value:"Regular class",id:"regular-class",children:[]},{value:"Related dataclass",id:"related-dataclass",children:[]},{value:"Relation attribute",id:"relation-attribute",children:[]},{value:"Related entities",id:"related-entities",children:[]},{value:"Remote datastore",id:"remote-datastore",children:[]},{value:"Session",id:"session",children:[]},{value:"Shallow copy",id:"shallow-copy",children:[]},{value:"Stamp",id:"stamp",children:[]},{value:"Storage attribute",id:"storage-attribute",children:[]}],u={toc:d};function p(e){var t=e.components,a=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"any-data-type"},(0,s.kt)("em",{parentName:"h2"},"any")," data type"),(0,s.kt)("p",null,'In this documentation, "any" data type is used to designate the various type of values that can be stored within dataclass attributes. It includes:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"number"),(0,s.kt)("li",{parentName:"ul"},"text"),(0,s.kt)("li",{parentName:"ul"},"null"),(0,s.kt)("li",{parentName:"ul"},"boolean"),(0,s.kt)("li",{parentName:"ul"},"date"),(0,s.kt)("li",{parentName:"ul"},"object"),(0,s.kt)("li",{parentName:"ul"},"collection"),(0,s.kt)("li",{parentName:"ul"},"picture(","*",")")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(","*",") picture type is not supported by statistical methods such as")," ",(0,s.kt)("inlineCode",{parentName:"p"},"entitySelection.max( )"),"."),(0,s.kt)("h2",{id:"attribute"},"Attribute"),(0,s.kt)("p",null,"An attribute is the smallest storage cell in a relational database (see also ",(0,s.kt)("a",{parentName:"p",href:"#relation-attribute"},"Relation attribute"),"). Do not confuse dataclass attributes and entity attributes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"In a dataclass object, each property is a dataclass attribute that maps to a corresponding field in the corresponding table (same name and type)."),(0,s.kt)("li",{parentName:"ul"},"In an entity object, entity attributes are properties that contain values for the corresponding datastore attributes.")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Attributes")," and ",(0,s.kt)("em",{parentName:"p"},"properties"),' are similar concepts. "Attribute" is used to designate dataclass properties that store data, while "property" is more generic and defines a piece of data stored within an object. '),(0,s.kt)("h2",{id:"attributepath"},"AttributePath"),(0,s.kt)("p",null,"An attributePath is the path of an attribute inside a given dataclass or entity. See also ",(0,s.kt)("a",{parentName:"p",href:"#propertyPath"},"PropertyPath"),"."),(0,s.kt)("h2",{id:"calculated-attribute"},"Calculated attribute"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"#computed-attribute"},"Computed attribute"),"."),(0,s.kt)("h2",{id:"class-code"},"Class code"),(0,s.kt)("p",null,"Code for the user class function(s). "),(0,s.kt)("h2",{id:"class-function"},"Class function"),(0,s.kt)("p",null,"ORDA objects such as datastores, dataclasses, entity selections, and entities, define classes of objects. They provide specific functions to directly interact with them. These functions are called class functions. Such functions are used by calling them on an instance of the object."),(0,s.kt)("p",null,"For example, the ",(0,s.kt)("inlineCode",{parentName:"p"},"query()")," function is a dataclass class function. If you have stored a dataclass object in the ",(0,s.kt)("inlineCode",{parentName:"p"},"$myClass")," variable, you can write:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-code4d"},'$myClass.query("name = smith")\n')),(0,s.kt)("h2",{id:"computed-attribute"},"Computed attribute"),(0,s.kt)("p",null,'A computed attribute doesn\'t actually store information. Instead, it determines its value based on other values from the same entity or from other entities, attributes or functions. When a computed attribute is referenced, the underlying "computation" is evaluated to determine the value. Computed attributes may even be assigned values where user-defined code determines what to do during the assignment.'),(0,s.kt)("h2",{id:"data-model-class"},"Data model class"),(0,s.kt)("p",null,"Extended class available for a data model object. "),(0,s.kt)("h2",{id:"data-model-object"},"Data model object"),(0,s.kt)("p",null,"Database objects available through the ORDA concept, i.e. datastore, dataclasses, entities and entity selections."),(0,s.kt)("h2",{id:"data-model-function"},"Data model function"),(0,s.kt)("p",null,"Function of an ORDA data model class."),(0,s.kt)("h2",{id:"dataclass"},"Dataclass"),(0,s.kt)("p",null,"A dataclass is an object model that describes the data. Tables in the database provided by the datastore are handled through dataclasses. Each table in the database provided by the datastore has a corresponding dataclass with the same name. Each field of the table is an attribute of the dataclass."),(0,s.kt)("p",null,"A dataclass is related to a single datastore."),(0,s.kt)("h2",{id:"dataclass-class"},"DataClass class"),(0,s.kt)("p",null,"Class for specific dataclass objects, in which you can add custom functions. "),(0,s.kt)("h2",{id:"datastore"},"Datastore"),(0,s.kt)("p",null,"A datastore is the interface object provided by ORDA to reference a structure and access its data. The main database, returned by the ",(0,s.kt)("inlineCode",{parentName:"p"},"ds")," command, is available as a datastore (the main datastore)."),(0,s.kt)("p",null,"A datastore provides:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"a connection to a database"),(0,s.kt)("li",{parentName:"ul"},"a set of dataclasses to work with the database")),(0,s.kt)("p",null,"The database can be a 4D local database (the Main datastore), or a 4D Server database exposed as REST resource (a Remote datastore). "),(0,s.kt)("p",null,"A datastore references only a single database. It is, however, possible to open several datastores to access several databases."),(0,s.kt)("h2",{id:"datastore-class"},"DataStore class"),(0,s.kt)("p",null,"Class for datastore objects, in which you can add custom functions. "),(0,s.kt)("h2",{id:"datastoreimplementation"},"DataStoreImplementation"),(0,s.kt)("p",null,"Internal name of the generic DataStore class in the ",(0,s.kt)("inlineCode",{parentName:"p"},"4D")," class store."),(0,s.kt)("h2",{id:"deep-copy"},"Deep copy"),(0,s.kt)("p",null,"A deep copy duplicates an object and all the references it contains. After a deep copy, a copied collection contains duplicated elements and thus, new references, of all of the orginal elements. See also ",(0,s.kt)("a",{parentName:"p",href:"#shallow-copy"},"Shallow copy"),"."),(0,s.kt)("h2",{id:"ds"},"ds"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ds")," is the 4D language command that returns a ",(0,s.kt)("a",{parentName:"p",href:"dsMapping.md#datastore"},"datastore")," object reference. It matches the datastore available upon the 4D main database."),(0,s.kt)("h2",{id:"entity"},"Entity"),(0,s.kt)("p",null,"An entity is an object that corresponds to a dataclass model. An entity contains the same attributes as the dataclass."),(0,s.kt)("p",null,"An entity can be seen as an instance of the dataclass, like a record of the table matching the dataclass in its associated datastore. However, an entity also contains related data. The purpose of the entity is to manage data (create, update, delete)."),(0,s.kt)("h2",{id:"entity-selection"},"Entity selection"),(0,s.kt)("p",null,"An entity selection is an object. When querying the datastore, an entity selection is returned. An entity selection is a set of references to entities related to the same dataclass."),(0,s.kt)("p",null,"An entity selection contains:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"a set of 0 to X entity references,"),(0,s.kt)("li",{parentName:"ul"},"a length property (always),"),(0,s.kt)("li",{parentName:"ul"},"queryPlan and queryPath properties (if asked while querying).")),(0,s.kt)("p",null,"An entity selection can also be empty."),(0,s.kt)("h2",{id:"function"},"Function"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"#class-function"},"Class function"),"."),(0,s.kt)("h2",{id:"generic-class"},"Generic class"),(0,s.kt)("p",null,"Built-in class for ORDA objects such as entities, or dataclasses. Functions and properties of generic classes are automatically available in user extended classes, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"EmployeeEntity"),". "),(0,s.kt)("h2",{id:"lazy-loading"},"Lazy loading"),(0,s.kt)("p",null,"Since entities are managed as references, data is loaded only when necessary, i.e. when accessing it in the code or through interface widgets. This optimization principle is called lazy loading."),(0,s.kt)("h2",{id:"main-datastore"},"Main datastore"),(0,s.kt)("p",null,"The Datastore object matching the opened 4D database (standalone or client/server). The main datastore is returned by the ",(0,s.kt)("inlineCode",{parentName:"p"},"ds")," command. "),(0,s.kt)("h2",{id:"optimistic-lock"},"Optimistic Lock"),(0,s.kt)("p",null,'In "optimistic lock" mode, entities are not locked explicitly before updating them. Each entity has an internal stamp that is automatically incremented each time the entity is saved on disk. The entity.save( ) or entity.drop( ) methods will return an error if the stamp of the loaded entity (in memory) and the stamp of the entity on disk do not match, or if the entity has been dropped. Optimistic locking is only available in ORDA implementation. See also "Pessimistic lock".'),(0,s.kt)("h2",{id:"orda"},"ORDA"),(0,s.kt)("p",null,"Object Relational Data Access. See ",(0,s.kt)("a",{parentName:"p",href:"overview"},"What is ORDA?")),(0,s.kt)("h2",{id:"pessimistic-lock"},"Pessimistic Lock"),(0,s.kt)("p",null,'A "pessimistic lock" means that an entity is locked prior to its being accessed, using the ',(0,s.kt)("inlineCode",{parentName:"p"},"entity.lock()")," function. Other processes can neither update nor drop the entity until it is unlocked. See also ",(0,s.kt)("a",{parentName:"p",href:"#optimistic-lock"},"Optimistic lock"),"."),(0,s.kt)("h2",{id:"property"},"Property"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"#attribute"},"Attribute"),"."),(0,s.kt)("h2",{id:"propertypath"},"PropertyPath"),(0,s.kt)("p",null,'A propertyPath is the path to a property in a given object. If the property is nested in several levels, each level separated is by a dot (".").'),(0,s.kt)("h2",{id:"regular-class"},"Regular class"),(0,s.kt)("p",null,"User class not related to an ORDA object."),(0,s.kt)("h2",{id:"related-dataclass"},"Related dataclass"),(0,s.kt)("p",null,"These are dataclasses linked by relation attributes."),(0,s.kt)("h2",{id:"relation-attribute"},"Relation attribute"),(0,s.kt)("p",null,"Relation attributes are used to conceptualize relations between dataclasses (many-to-one and one-to-many)."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Many-to-one relation (dataclassA references an occurrence of dataclassB): a relation attribute is available in dataclassA and references one instance of dataclassB."),(0,s.kt)("li",{parentName:"ul"},"One-to-many relation (an occurence of dataclassB references several occurrences of dataclassA): a relation attribute is available in dataclassB and references several instances of dataclassA.")),(0,s.kt)("p",null,"A dataclass can have recursive relation attributes."),(0,s.kt)("p",null,"In an entity, the value of a relation attribute can be an entity or an entity selection."),(0,s.kt)("h2",{id:"related-entities"},"Related entities"),(0,s.kt)("p",null,"A related entity can be seen as the instance of a relation attribute in a dataclass."),(0,s.kt)("p",null,"Entity selections may refer to related entities according to the relation attributes defined in the corresponding dataclasses."),(0,s.kt)("h2",{id:"remote-datastore"},"Remote datastore"),(0,s.kt)("p",null,"A 4D database opened on a 4D or 4D Server (available through HTTP) and exposed as a REST resource. This database can be referenced locally as a Datastore from other workstations, where it is assigned a locaID. The remote datastore can be used through ORDA concepts (datastore, dataclass, entity selection...). This use is submitted to a licencing system."),(0,s.kt)("h2",{id:"session"},"Session"),(0,s.kt)("p",null,"When the 4D application connects to a Remote datastore, a session is created on the 4D Server (HTTP). A session cookie is generated and associated to the local datastore id. "),(0,s.kt)("p",null,"Each time a new session is opened, a license is used. Each time a session is closed, the license is freed."),(0,s.kt)("p",null,"Inactive sessions are automatically closed after a timeout. The default timeout is 60 minutes, it can be set by the developer (it must be >= 60 minutes).  "),(0,s.kt)("h2",{id:"shallow-copy"},"Shallow copy"),(0,s.kt)("p",null,"A shallow copy only duplicates the structure of elements, and keeps the same internal references. After a shallow copy, two collections will both share the individual elements. See also ",(0,s.kt)("a",{parentName:"p",href:"#deep-copy"},"Deep copy"),"."),(0,s.kt)("h2",{id:"stamp"},"Stamp"),(0,s.kt)("p",null,'Used in "optimistic" locking technology. All entities have an internal counter, the stamp, which is incremented each time the entity is saved. By automatically comparing stamps between an entity being saved and its version stored on disk, ORDA can prevent concurrent modifications on the same entities.'),(0,s.kt)("h2",{id:"storage-attribute"},"Storage attribute"),(0,s.kt)("p",null,"A storage attribute (sometimes referred to as a scalar attribute) is the most basic type of attribute in a datastore class and most directly corresponds to a field in a relational database. A storage attribute holds a single value for each entity in the class."))}p.isMDXComponent=!0}}]);