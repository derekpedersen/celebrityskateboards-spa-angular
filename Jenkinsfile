pipeline {
    agent {
        label 'build-node-stable'
    }
    options {
        skipDefaultCheckout true
    }
    stages {
        stage('Checkout') {
            steps{
                dir('/root/workspace/celebrityskateboards-spa-angular') {
                    checkout scm
                }
            }
        }
        stage('Dependencies') {
            steps{
                dir('/root/workspace/celebrityskateboards-spa-angular') {
                    sh 'npm install'
                }
            }
        }
        stage('Build') {
            steps{
                dir('/root/workspace/celebrityskateboards-spa-angular') {
                    sh 'npm run build'
                }
            }
        }
        // TODO: need to fix the tests on build server
        // stage('Test') {
        //     steps{
        //         dir('/root/workspace/celebrityskateboards-spa-angular') {
        //             sh 'make test'
        //         }
        //     }
        // }
        stage('Docker') {
            steps {
                dir('/root/workspace/celebrityskateboards-spa-angular') {
                    sh 'npm run docker:build'
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
                        sh 'npm run docker:tag'
                        sh 'npm run docker:publish'
                    }
                }
            }
        }
        stage('Deploy') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                dir('/root/workspace/celebrityskateboards-spa-angular') {
                    sh 'npm run set-version'
                    sh 'npm run deploy'
                }
            }
        }
    }
}