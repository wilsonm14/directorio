pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Build'
            }
        }

        stage('Test') {
            steps {
                echo 'Test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Levantando contenedores manualmente...'

                sh 'docker run -d -p 3001:3000 wilsonmz/users-service'
                sh 'docker run -d -p 3002:3000 wilsonmz/business-service'
                sh 'docker run -d -p 3003:3000 wilsonmz/orders-service'
                sh 'docker run -d -p 3004:3000 wilsonmz/search-service'
                sh 'docker run -d -p 3000:3000 wilsonmz/gateway'
            }
        }

        stage('Verify') {
            steps {
                sh 'docker ps'
            }
        }
    }
}
