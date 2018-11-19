pipeline {
    agent {
        label 'build-angular-latest'
    }
    stages {
        stage('Checkout') {
            steps{
                dir('/root/workspace/celebrityskateboards-spa-angular') {
                    checkout scm
                }
            }
        }
        stage('Build') {
            steps{
                dir('/root/workspace/celebrityskateboards-spa-angular') {
                    sh 'make build'
                }
            }
        }
        stage('Test') {
            steps{
                dir('/root/workspace/celebrityskateboards-spa-angular') {
                    sh 'make test'
                }
            }
        }
        stage('Docker') {
            steps {
                dir('/root/workspace/celebrityskateboards-spa-angular') {
                    sh 'make docker'
                }
            }
        }
        stage('Publish') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                withCredentials([[$class: 'StringBinding', credentialsId: 'GCLOUD_PROJECT_ID', variable: 'GCLOUD_PROJECT_ID']]) {
                    dir('/root/workspace/celebrityskateboards-spa-angular') {
                        sh 'make publish'
                    }
                }
            }
        }
        stage('Deploy') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                withCredentials([[$class: 'StringBinding', credentialsId: 'GCLOUD_PROJECT_ID', variable: 'GCLOUD_PROJECT_ID']]) {
                    dir('/root/workspace/celebrityskateboards-spa-angular') {
                        sh 'make deploy'
                    }
                }
            }
        }
    }
    post {
        always {
            withCredentials([[$class: 'StringBinding', credentialsId: 'CELEBRITYSKATEBOARDS_SPA_COVERALLS_TOKEN', variable: 'COVERALLS_REPO_TOKEN']]) {
                dir('/root/workspace/celebrityskateboards-spa-angular') {
                    step([$class: 'CoberturaPublisher', autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: '**/cobertura-coverage.xml', failUnhealthy: false, failUnstable: false, maxNumberOfBuilds: 0, onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false]) 
                    sh 'make coveralls'
                }
            }
        }
    }
}