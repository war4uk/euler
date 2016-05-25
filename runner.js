import yargs from 'yargs';

const issueNumber = yargs.argv.issue || 1;

console.log(require(`./issues/issue-${issueNumber}`).default);
