declare module '*.scss' {
	const exports: { [exportName: string]: string };
	export = exports;
}

declare module '*.module.scss' {
	const exports: { [exportName: string]: string };
	export = exports;
}
