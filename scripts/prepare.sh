if [ ! -f './.husky/_/husky.sh' ]; then
  pnpx husky install
fi

if [ ! -f './.husky/pre-commit' ]; then
  pnpx husky add './.husky/pre-commit' 'pnpx lint-staged'
fi

