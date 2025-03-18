//modify rollup-plugin-styles to preserve css files' original path
//find the generateBundle function of rollup-plugin-styles in node_modules
//and modify it as follows(remember to add "preserveModulesRoot" to the rollup config options)
//then you can build your package with css files preserved at their original paths
//the next step is to add the "import" statement to the generated js files


// for (const chunk of emitted) {
//   const ids = getImports(chunk).filter(id => !moved.includes(id));
//   if (ids.length === 0) continue;
//   const name = getName(chunk);
//   emittedList.push([name, ids]);
// }
for (const chunk of extracted) {
    const { id, css } = chunk
    const name = getName({ fileName: id });
    const fileName = `${name.replace(`${opts.preserveModulesRoot}${path__default["default"].sep}`, '')}.css`
    this.emitFile({
        type: 'asset',
        fileName,
        source: css
    })
}