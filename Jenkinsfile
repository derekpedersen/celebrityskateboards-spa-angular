pipeline {
    agent {
        label 'build-angular'
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
}