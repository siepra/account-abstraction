#!/bin/bash

# abi_dir="account-abstraction/src/abi"
# package_dir="account-abstraction/aa-schnorr-multisig-sdk"

# To copy entire folder
# cp -r "$sdk_dir"/* "$package_dir"
# cp -r "$abi_dir"/* "$package_dir"

script_dir=$(realpath "$(dirname "$0")")

# Navigate up one directory to reach the parent directory
parent_dir=$(dirname "$script_dir")

# Source directories
abi_dir="$parent_dir/src/abi"

# Destination directory
package_dir="$parent_dir/aa-schnorr-multisig-sdk/src/abi"

# Copy only needed abi files
cp "$abi_dir/MultiSigSmartAccount.json" -t "$package_dir"
cp "$abi_dir/MultiSigSmartAccountFactory.json" -t "$package_dir"
