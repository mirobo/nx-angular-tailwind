const execSync = require('child_process').execSync;

for(let i=1; i <= 20; i++) {
    let x= i<10 ? `0${i}` : i;
    execSync(`npx nx generate @nx/angular:library lib${x} --directory=lib-overload --buildable --compilationMode=full --importPath=@lib-overload/lib${x} --routing --skipPackageJson --skipTests --no-standalone`)
}