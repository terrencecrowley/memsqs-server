import * as Util from '@terrencecrowley/util';
import * as Q from '@terrencecrowley/memsqs';

const Port: number = Number(process.env.SQS_PORT) || 14141;
const Interval: number = Number(process.env.SQS_REPORTING_INTERVAL) || 30000;
let server = new Q.SQSServer(Port);
console.log(`SQS Server listening on port ${Port}`);

reportStats();
setInterval(reportStats, Interval);

function reportStats(): void
{
  if (! server.running)
  {
    console.log('Server not running. Exiting');
    process.exit(1);
  }

  let qm = server.queuemanager;
  console.log(Util.Now());
  console.log(`INFO: ${qm.nSent} messages sent`);
  console.log(`INFO: ${qm.nReceived} messages received`);
  console.log(`INFO: ${qm.nRemoved} messages removed`);
  console.log(`INFO: ${qm.nCulled} messages culled`);
}
