if [ "$TRAVIS_PULL_REQUEST" = "false" ]; then
  openssl aes-256-cbc -K $encrypted_24cd7a79dfa4_key -iv $encrypted_24cd7a79dfa4_iv -in deploy_rsa.enc -out /tmp/deploy_rsa -d
  eval "$(ssh-agent -s)"
  chmod 600 /tmp/deploy_rsa
  ssh-add /tmp/deploy_rsa
fi
