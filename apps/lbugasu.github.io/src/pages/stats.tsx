/** @jsxImportSource theme-ui */
import useSWR from 'swr'
import styles from './stats.module.scss'
import { Card } from 'theme-ui'
import { Table, Column } from '@component-controls/components'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Stats() {
  const { data, error } = useSWR('/api/stats', fetcher)
  if (!data) {
    return <div> no data</div>
  }
  if (error) return <div></div>

  const ghData = data.gh.data

  const lastDeployment = ghData.repository.deployments.nodes[0]
  const languages = ghData.repository.languages

  return (
    <div className={styles.stats}>
      <h1 sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
        <span>Stats&nbsp;</span>
        <span className="verySpecialChar" sx={{ verticalAlign: 'middle', marginBottom: '10px' }}>
          O
        </span>
      </h1>

      <div className={styles.details}>
        <div className={styles.deploymentStatus}>
          <span className={styles.status}>
            <h6>Last Deployment Status: &nbsp;</h6>
            <code
              sx={{
                color: lastDeployment.latestStatus.state === 'SUCCESS' ? 'green' : '#DE6449'
              }}
            >
              {lastDeployment.latestStatus.state}
            </code>
          </span>
          <span className={styles.date}>
            {/* <h6> date:&nbsp;</h6> */}
            <code> {new Date(lastDeployment.createdAt).toUTCString()} </code>
          </span>
        </div>
        <div className={styles.languages}>
          {languages.edges.map(({ size, node }) => {
            return (
              <div key={node.name} className={styles.language}>
                <span>{node.name}</span> - &nbsp;
                <code sx={{ fontSize: '12pt' }}>{((size / languages.totalSize) * 100).toFixed(2)}%</code>
              </div>
            )
          })}
        </div>
      </div>

      <Card></Card>
    </div>
  )
}

// const data = useMemo(mockData, []);
